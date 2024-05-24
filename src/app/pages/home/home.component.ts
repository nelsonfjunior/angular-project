import { UserService } from './../../_services/user.service';
import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { UserGit } from '../../models/userGit';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  user: UserGit | undefined;
  username: String = '';

  constructor(private userService: UserService, private toastr: ToastrService){

  }

  getGitUser(){
    this.userService.getGitUser(this.username).subscribe((response: UserGit)=>{
      this.user = response;
    }, (error) => {
      this.toastr.error(error.error.message);
    });
  }

}
