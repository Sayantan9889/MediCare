import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAppointmentsComponent } from './view-appointments.component';

const routes: Routes = [{ path: '', component: ViewAppointmentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewAppointmentsRoutingModule { }
