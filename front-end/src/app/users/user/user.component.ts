import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';

import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input()
  user: User;
  @Input() index: number;
  case: number;
  @Output()
  deleteUser: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  isAdmin() {
    return this.user.auth == 1;
  }
  isParkinson() {
    return this.user.auth == 2;
  }
  isTetra() {
    return this.user.auth == 3;
  }

  ngOnInit(): void {
    //document.getElementById('fname').addEventListener('change', myFunction);
    this.case = this.user.case;
  }

  delete() {
    this.deleteUser.emit(this.user);
  }

  update() {
    this.user.case = this.case;
    this.userService.updateUser(this.user, this.index);
  }
}
