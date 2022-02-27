import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  authStatus: number = 0;
  users: User[];
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {
    this.userService.users$.subscribe((users: User[]) => {
      this.users = users;
    });
  }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
    this.users = this.userService.getUsers();
    console.log(this.users);
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
