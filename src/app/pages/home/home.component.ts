import { UserService } from './../../_services/user.service';
import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private userService: UserService){

  }

  ngOnInit(): void {
    this.getGitUser();
  }

  getGitUser(){
    this.userService.getGitUser('facebook').subscribe((response: any)=>{
      console.log(response);
    });
  }

}
