import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/Services/AuthServices/storage.service';
import { AppointmentService } from 'src/app/Services/appointment.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {
  bookedData!: FormGroup;
  recievedBookData!: any;
  today = new Date();

  constructor(private fb: FormBuilder, private appoint: AppointmentService, private storage: StorageService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    // this.regMail = this.getRegMail();

    this.bookedData = this.fb.group({
      book_for: ["", Validators.required],
      name: ["", [Validators.required, Validators.pattern("^([A-Z]{1}[A-Za-z ]{2,30})")]],
      age: ["", [Validators.required, Validators.pattern("^([0-9]{1,3})")]],
      symptoms_testname: ["", Validators.required],
      phone: ["", [Validators.required, Validators.pattern("^([6-9]{1}[0-9]{9})")]],
      email: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      address: ["", Validators.required],
      // bookedOn: [this.datePipe.transform(Date.now(), 'dd-MM-yyyy')]
    });
  }

  booking() {
    this.recievedBookData = this.bookedData.value
    // console.log("Received booked Data: ", this.recievedBookData);

    if (this.loggedIn()) {
      let registered_mail = this.storage.getData()[0].email;
      let bookedOn = this.datePipe.transform(Date.now(), 'dd-MM-yyyy');

      let newBookedData = {
        registered_mail,
        ...this.recievedBookData,
        bookedOn
      }
      // console.log("Recived Booking data with registered mail id: ", newBookedData);

      this.appoint.create_appointment(newBookedData).subscribe((res: any) => {
        console.log("Booked data: ", res);
        alert(res.book_for + " successfully booked");
      });
    }
    else {
      alert("Please log in first")
    }

    this.bookedData.reset();
  }

  loggedIn() {
    return this.storage.getToken();
  }

  scroll(ele: HTMLElement) {
    ele.scrollIntoView();
  }
}
