import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, Registration } from 'src/app/AuthClass/auth';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registration_api = "https://wtsacademy.dedicateddevelopers.us/api/user/signup";
  login_api = "https://wtsacademy.dedicateddevelopers.us/api/user/signin";
  profile_api = "https://wtsacademy.dedicateddevelopers.us/api/user/profile-details";

  constructor(private http:HttpClient, private storage:StorageService) {}

  login_user(data: any):Observable<Login[]> {
    return this.http.post<Login[]>(this.login_api, data);
  }

  profile_details():Observable<Registration[]> {
    return this.http.get<Registration[]>(this.profile_api);
  }
}
