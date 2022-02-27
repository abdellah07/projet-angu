import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Answer, Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { AuthService } from 'src/services/auth.service';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss']
})
export class ViewQuestionComponent implements OnInit {

  quizId: String;
  quiz: Quiz;
  indexQuestion: number;
  question:Question;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private authService: AuthService
  ) {
    /*this.quizService.quizSelected$.subscribe((quiz) => (this.quiz = quiz));*/
  }

  ngOnInit(): void {
    this.quizId = this.route.snapshot.params['id'];
    this.quiz = this.quizService.getQuiz(this.quizId);
    this.indexQuestion = this.route.snapshot.params['idQ'];
    this.question = this.quiz.questions[this.indexQuestion];
  }

  chnagerQuestion() {
    this.quizService.updateQuestion(this.quiz, this.question);
    document.getElementById('info').style.visibility = "visible";
    setTimeout(
      () => {
        document.getElementById('info').style.visibility = "hidden";
      },4000
  );
  }

}
  