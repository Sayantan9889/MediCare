import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from 'src/app/Services/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {
  bookedData!: FormGroup;

  constructor(private fb: FormBuilder, private appoint: AppointmentService) { }

  ngOnInit(): void {
    this.bookedData = this.fb.group({
      book_for: ["", Validators.required],
      name: ["", Validators.required],
      age: ["", Validators.required],
      symptoms_testname: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", Validators.required],
      address: ["", Validators.required]
    });
  }

  booking() {
    console.log("Received booked Data: ", this.bookedData.value);

    this.appoint.create_appointment(this.bookedData.value).subscribe((res:any) => {
      console.log("Booked data: ", res);
      alert(res.book_for + "successfully booked");
    });
  }

  scroll(ele: HTMLElement) {
    ele.scrollIntoView();
  }
}
