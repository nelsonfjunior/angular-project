import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { UserGit } from '../models/userGit';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: String = environment.apiUrl;
  user: User | undefined;

  constructor(private http: HttpClient) {

  }

  getGitUser(username: String){
    return this.http.get<UserGit>(this.baseUrl + 'users/' + username).pipe(
      map((response: UserGit) => {
        return response;
      })
    );
  }

  setUser(user: User | undefined){
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  getUser(){
    return this.user;
  }

}
