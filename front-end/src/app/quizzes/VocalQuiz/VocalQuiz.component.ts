import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import { Question, Answer } from '../../../models/question.model';
import { VoiceRecognitionService } from 'src/services/voice-recognition.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { User } from 'src/models/user.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-VocalQuiz',
  templateUrl: './VocalQuiz.component.html',
  styleUrls: ['./VocalQuiz.component.scss'],
})
export class VocalQuizzComponent {
  indexQuiz: number = 0;
  b: boolean;
  a: boolean;
  user: User;
  @Input() quiz: Quiz;
  questionIndex: number = 0;
  missClick: number = 0;
  CorrectAnsw: number = 0;
  pourcentage: number;
  answer: number;
  constructor(
    public service: VoiceRecognitionService,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.b = true;
    this.service.init();
  }

  increment() {
    if (!this.isEnd()) {
      if (this.answer == this.trueQuestionIndex()) this.CorrectAnsw++;
      this.questionIndex++;
    }
  }

  trueQuestionIndex(): number {
    const answers = this.quiz.questions[this.questionIndex].answers;
    for (let index = 0; index < answers.length; index++)
      if (answers[index].isCorrect) return index;
  }

  isEnd() {
    return this.questionIndex >= this.quiz.questions.length;
  }

  ngOnInit() {
    setTimeout(() => {
      document.getElementById('sound').style.visibility = 'visible';
      document.getElementById('alert').style.visibility = 'hidden';
      document.getElementById('alert-bis').style.visibility = 'visible';
      this.startVoice();
    }, 1000);
    this.user = this.authService.user;
  }

  validate() {
    this.user.missclick = 0;
    this.user.correct = this.CorrectAnsw;
    this.pourcentage = Math.round(
      (this.CorrectAnsw / this.quiz.questions.length) * 100
    );
    this.user.pourcentage = this.pourcentage;
    this.user.totalQuestion = this.quiz.questions.length;
    this.userService.deleteUser(this.user);
    this.userService.addUser(this.user);
  }

  startVoice() {
    this.start('sound');
  }

  isStoppedSpeechRecog: boolean;

  start(id: String) {
    this.answer = 0;
    document.getElementById('sound').classList.add('animated');
    this.isStoppedSpeechRecog = false;
    this.service.recognition.start();
    console.log('Reconnaissance vocale a commencé');
    this.service.recognition.addEventListener('end', (condition) => {
      this.b = false;
      this.service.text = this.service.tempWords;

      console.log(this.service.text);

      let index = 0;
      let tab: string[] = [];
      for (
        let i = 0;
        i < this.quiz.questions[this.questionIndex].answers.length;
        i++
      ) {
        tab.push('numéro ' + i);
      }

      for (; index < tab.length; index++) {
        if (tab[index] == this.service.text) {
          this.answer = index;
          this.isStoppedSpeechRecog = true;
          break;
        }
      }

      if (this.isStoppedSpeechRecog) {
        this.service.stop();
        document.getElementById('nombre' + index).style.backgroundColor =
          'rgb(94, 199, 85)';
        // Correcte Answers
        setTimeout(() => {
          this.increment();
        }, 4000);
        this.isStoppedSpeechRecog = false;
        this.service.stop();
      }
      this.service.stop();
      this.service.recognition.start();
    });
  }
}
