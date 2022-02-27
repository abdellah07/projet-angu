import { Injectable } from '@angular/core';

declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root',
})
export class VoiceRecognitionService {
  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text: String = '';
  tempWords: String;
  b: boolean;

  constructor() {}

  init() {
    this.recognition.interimResults = true;
    this.recognition.lang = 'fr-FR';
    this.recognition.addEventListener('result', (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
      console.log(this.tempWords);
    });
  }

  getText() {
    return this.text;
  }

  /*start(id: String, array: string[]) {
    document.getElementById('sound').classList.add('animated');
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    console.log('Reconnaissance vocale a commencé');
    this.recognition.addEventListener('end', (condition) => {
      this.b = false;
      this.text = this.tempWords;

      console.log(this.text);

      let index = 0;
      for (; index < array.length; index++) {
        if (array[index] == this.text) {
          this.isStoppedSpeechRecog = true;
          break;
        }
      }
      if (this.isStoppedSpeechRecog) {
        this.stop();
        console.log('Terminer' + index);
        document.getElementById('nombre' + index).style.backgroundColor =
          'rgb(94, 199, 85)';
        this.b = true;
      }
      this.recognition.start();
    });
    return this.b;
  }*/

  stop() {
    document.getElementById('sound').classList.remove('animated');
    this.recognition.stop();
    console.log('Terminer');
  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords + '.';
    this.tempWords = '';
  }
}
