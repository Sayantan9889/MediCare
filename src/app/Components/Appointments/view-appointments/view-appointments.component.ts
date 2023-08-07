import { Component } from '@angular/core';
import { AppointmentService } from 'src/app/Services/appointment.service';
import { StorageService } from 'src/app/Services/AuthServices/storage.service';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.scss']
})
export class ViewAppointmentsComponent {
  allAppointments!: any;
  appointments:any=[];

  constructor(private appoint:AppointmentService, private storage:StorageService) {}

  ngOnInit() {
    this.appoint.view_appointment().subscribe((res:any) => {
      this.allAppointments = res;
      // console.log("Appointments: ",this.allAppointments);

      if(this.loggedIn()) {
        let regMail = this.storage.getData()[0].email;

        for(let i of this.allAppointments){
          // checking if mail stored in storage is equal to any appointment's registered_mail
          // and store those appointments into 'appointments' array
          if(i.registered_mail === regMail) {
            this.appointments.push(i);
          }
        }
        // console.log("appointment: ", this.allAppointments);
      }
    })
    // console.log("All appointments: ", this.allAppointments);
  }

  loggedIn() {
    return this.storage.getToken();
  }
}
