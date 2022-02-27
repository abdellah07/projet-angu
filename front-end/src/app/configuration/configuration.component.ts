import { Component, OnInit } from '@angular/core';
import { VoiceRecognitionService } from '../../services/voice-recognition.service'


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  providers: [VoiceRecognitionService]
})
export class ConfigurationComponent implements OnInit {
  constructor(public service : VoiceRecognitionService) { 
    this.service.init()
  }

  ngOnInit(): void {
    
  }

  valueChanged(e) {
    document.getElementById("nabil").style.fontSize = e+"%";
    document.getElementById("valeur1").innerHTML=e;
  }

  valueChanged1(e) {
    document.getElementById("box").style.fontSize = e+"%";
    document.getElementById("box").style.height = e+"px";
    document.getElementById("box").style.width = 2*e+"px";
    document.getElementById("valeur2").innerHTML=e;
  }
}











