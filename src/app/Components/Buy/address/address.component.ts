import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  // addressData!: FormGroup;

  constructor(private router:Router) { }

  // subData() {}

  navigate() {
    this.router.navigateByUrl('/payment');
  }
}
