import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewAppointmentsRoutingModule } from './view-appointments-routing.module';
import { ViewAppointmentsComponent } from './view-appointments.component';


@NgModule({
  declarations: [
    ViewAppointmentsComponent
  ],
  imports: [
    CommonModule,
    ViewAppointmentsRoutingModule
  ]
})
export class ViewAppointmentsModule { }
