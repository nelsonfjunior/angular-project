import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user: User | undefined;

  @Output() userInfoEmitter = new EventEmitter<User>();

  retornarDados(){
    this.userInfoEmitter.emit(this.user);
  }

}
