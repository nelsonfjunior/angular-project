import { UserService } from './../../_services/user.service';
import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserGit } from '../../models/userGit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  user: UserGit | undefined;

  constructor(private userService: UserService){

  }

  ngOnInit(): void {
    this.getGitUser();
  }

  getGitUser(){
    this.userService.getGitUser('nelsonfjunior').subscribe((response: UserGit)=>{
      this.user = response;
    });
  }

}
