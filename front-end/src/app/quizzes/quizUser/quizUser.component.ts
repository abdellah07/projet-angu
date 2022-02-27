import { Component } from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import { Answer, Question } from '../../../models/question.model';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/services/quiz.service';
import { AuthService } from 'src/services/auth.service';
import { User } from 'src/models/user.model';
import { UserService } from 'src/services/user.service';

declare var webkitrequestFullscreen: any;

@Component({
  selector: 'app-quizUser',
  templateUrl: './quizUser.component.html',
  styleUrls: ['./quizUser.component.scss'],
})
export class quizUser {
  missClick: number = 0;
  indexQuiz: number = 0;
  CorrectAnsw: number = 0;
  pourcentage: number = 0;
  finalResult:number=0;
  selectedAnswer = new Map();
  isSelected: boolean = false;
  isSelectedAnsw: boolean = false;
  added: boolean = false;
  correctTable = [];
  public question: Question;
  public answer: Answer;
  public quiz: Quiz;
  case: number;
  user: User;

  isEnd() {
    return this.indexQuiz >= this.quiz.questions.length;
  }

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.quizService.quizSelected$.subscribe((quiz) => (this.quiz = quiz));
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
    this.case = this.authService.getUserCase();
    this.user = this.authService.user;
  }

  ngAfterViewChecked() {
    this.full();
    
  }

  validate() {
    this.user.missclick = this.missClick;
    this.user.correct = this.CorrectAnsw;
    this.user.pourcentage = this.pourcentage;
    this.user.totalQuestion = this.quiz.questions.length;
    this.userService.deleteUser(this.user);
    this.userService.addUser(this.user);
  }

  full() {
    var elem = document.getElementById('100');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  }

  getCorrectAnswer() {
    for (let i = 0; i < 4; i++) {
      if (this.quiz.questions[this.indexQuiz].answers[i].isCorrect) {
        if (!this.added) {
          this.correctTable.push(this.quiz.questions[this.indexQuiz].answers[i].value);
          this.added = true;
        }
        return i;
      }
    }
  }

  incrementMiss(e) {
    if (e.id != 'answer') this.missClick++;
    console.log("missClick :",this.missClick);
  }

  incrementCorrect(e) {
    var correct = this.quiz.questions[this.indexQuiz].answers[this.getCorrectAnswer()].value;
    console.log(correct == e.innerHTML);
    if (correct == e.innerHTML && !this.isSelected) {
      this.CorrectAnsw++;
      this.isSelected=true;
    }
    else if(correct != e.innerHTML){
      while(this.CorrectAnsw!=0)
        this.CorrectAnsw--;
        this.isSelected=false;
    }
  }

  increment() {
    if (!this.isEnd()) {
      this.indexQuiz++;
      this.isSelected = false;
      this.added = false;
      this.finalResult+=this.CorrectAnsw;
      this.CorrectAnsw=0;
      console.log("final result",this.finalResult);
      this.pourcentage = Math.round(
        (this.finalResult / this.quiz.questions.length) * 100
      );
    }
  }

  selectedQuestion(e) {
    this.selectedAnswer.delete(this.indexQuiz);
    this.selectedAnswer.set(this.indexQuiz, e.innerHTML);
    this.isSelectedAnsw = false;
    console.log(this.selectedAnswer);
    console.log(this.correctTable);
    console.log("test:",this.selectedAnswer.get(this.indexQuiz)==this.correctTable[this.indexQuiz]);
    console.log("correct answer :",this.CorrectAnsw);
  }
}
