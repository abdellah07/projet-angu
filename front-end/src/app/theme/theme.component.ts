import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { AuthService } from 'src/services/auth.service';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent implements OnInit {
  @Input() quizs: Quiz[] = [];

  constructor(
    private router: Router,
    public quizService: QuizService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

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
