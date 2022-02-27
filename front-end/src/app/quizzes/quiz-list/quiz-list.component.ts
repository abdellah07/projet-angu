import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss'],
})
export class QuizListComponent implements OnInit {
  public quizList: Quiz[] = [];
  themes: String[] = [];

  constructor(
    private router: Router,
    public quizService: QuizService,
    private authService: AuthService
  ) {
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;
      let themes = new Set<String>();
      for (let i = 0; i < this.quizList.length; i++) {
        themes.add(this.quizList[i].theme);
      }
      this.themes = Array.from(themes);
    });
    console.log(this.quizList);
  }

  ngOnInit(): void {}

  getQuizzs(j: number) {
    let quizs: Quiz[] = [];

    for (let i = 0; i < this.quizList.length; i++) {
      if (this.quizList[i].theme == this.themes[j]) {
        quizs.push(this.quizList[i]);
      }
    }
    console.log(quizs);
    return quizs;
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  quizSelected(selected: boolean): void {
    console.log('event received from child:', selected);
  }

  editQuiz(quiz: Quiz): void {
    this.router.navigate(['/edit-quiz/' + quiz.name]);
  }

  deleteQuiz(quiz: Quiz): void {
    this.quizService.deleteQuiz(quiz);
  }
}
