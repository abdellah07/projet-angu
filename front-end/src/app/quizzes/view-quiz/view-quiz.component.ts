import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { AuthService } from 'src/services/auth.service';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.scss']
})
export class ViewQuizComponent implements OnInit {

  public quiz: Quiz;
  case: number;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private authService: AuthService
  ) {
    this.quizService.quizSelected$.subscribe((quiz) => (this.quiz = quiz));
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
  }

  estParkinsonien() {
    return this.authService.isParkinson();
  }

  estTetraplegique() {
    return this.authService.isTetra();
  }
}
