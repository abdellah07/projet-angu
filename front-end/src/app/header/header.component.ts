import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  setNotAuth() {
    this.authService.setNotAuth();
  }
  isAdmin() {
    return this.authService.isAdmin();
  }
  isParkinson() {
    return this.authService.isParkinson();
  }
  isTetra() {
    return this.authService.isTetra();
  }
}
