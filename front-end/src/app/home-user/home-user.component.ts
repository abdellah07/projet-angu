import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss'],
})
export class HomeUserComponent implements OnInit {
  @Input()
  user: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  isAdmin() {
    return this.user.auth == 1;
  }

  isParkinson() {
    return this.user.auth == 2;
  }
  isTetra() {
    return this.user.auth == 3;
  }

  setAuth() {
    this.authService.user = this.user;
    console.log("hehheh:"+this.user.case);
    if (this.isAdmin()) {
      this.admin();
    } else if (this.isParkinson()) {
      this.parkinson();
    } else if (this.isTetra()) {
      this.tetra();
    }
  }

  admin() {
    this.authService.setAdmin();
  }

  parkinson() {
    this.authService.setParkinson();
  }

  tetra() {
    this.authService.setTetra();
  }
}
