import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  //users: String[] = ['Vinicius', 'Julio', 'Lucas', 'Rafael', 'Gabriel'];
  userSelecionado: User | undefined;
  users: User[] = [
    {
      nome: 'Vinicius',
      idade: 25
    },
    {
      nome: 'Julio',
      idade: 19
    },
    {
      nome: 'Larissa',
      idade: 45
    },
    {
      nome: 'Maria',
      idade: 67
    }
  ];

  infoUserSelecionado(user: User){
    this.userSelecionado = user;
  }

}
