import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Login, Registration } from 'src/app/Class/AuthClass/auth';
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
    return this.http.post<Login[]>(this.login_api, data).pipe(catchError(this.errHandler));
  }

  profile_details():Observable<Registration[]> {
    // return this.http.get<Registration[]>(this.profile_api, {
    //     headers: new HttpHeaders({
    //       'x-access-token': `${this.storage.getToken()}`
    //     })
    //   });

    return this.http.get<Registration[]>(this.profile_api).pipe(catchError(this.errHandler));
  }

  register_user(data:any):Observable<Registration[]> {
    return this.http.post<Registration[]>(this.registration_api, data).pipe(catchError(this.errHandler));
  }

  errHandler(error:HttpErrorResponse) {
    return throwError(() => error || "Server Error!");
  }
}
