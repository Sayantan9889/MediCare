import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../Class/Appointment/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  api:string = "http://localhost:3000/appointments";

  constructor(private http: HttpClient) { }

  create_appointment(data: any):Observable<Appointment[]>
  {
    return this.http.post<Appointment[]>(this.api, data);
  }

  view_appointment():Observable<Appointment[]>
  {
    return this.http.get<Appointment[]>(this.api);
  }
}
