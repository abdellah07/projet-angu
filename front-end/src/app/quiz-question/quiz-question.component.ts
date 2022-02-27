import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';
import { quizUser } from '../quizzes/quizUser/quizUser.component';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss'],
})
export class QuizQuestionComponent implements OnInit {             

  @Input() compteur:number;
  @Input() quiz: Quiz;
  @Input() question: Question;
  @Input() idQuiz: number;
  questionParent: Question;

  questionRemplie() {
    var nbr: Number= 0;
    let NBREP=2;
    if (this.question.label == '' || this.question.answers.length < NBREP) {
      return false;
    }
    let nbAnswers=0;
    for(let i=0;i<NBREP;i++){
      if(this.question.answers[i].isCorrect){
        nbAnswers++;
      }
    }
    if(nbAnswers!=1){
      return false;
    }
    return true;
  }

  deleteQuestion() {
      this.service.deleteQuestion(this.quiz,this.question)
  }

  editQuestion() {
      //this.service.
  }

  constructor(private service : QuizService) {
    this.questionParent=this.question;
  }

  ngOnInit(): void {
    
  }
}