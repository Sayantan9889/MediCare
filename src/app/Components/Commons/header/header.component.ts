import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/Services/AuthServices/storage.service';
import { CartService } from 'src/app/Services/cart.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartItems!: any;
  token!: any;
  data!: any;
  fname!: string;
  lname!: string;

  constructor(private route: Router,
    private cartSer:CartService,
    private storage:StorageService,
    private location:Location) { }

  ngOnInit():void {
    this.cartItems = this.cartSer.cartItem;
    // console.log("Location: ", this.location.path());

  }

  activeLoc() {
    console.log("Location: ", this.location.path());
    return this.location.path();
  }

  // search(data: NgForm) {
  //   let Med = data.value.med;
  //   // console.log(Med);
  //   if (Med !== "") {  // checking if entered some text or not
  //     this.route.navigate([`search/${Med}`]);
  //   }
  // }
  search(event: Event) {
    let Med = (event?.target as HTMLInputElement)?.value;
    // console.log(Med);
    if (Med !== "") {  // checking if entered some text or not
      this.route.navigate([`search/${Med}`]);
    }
  }


  log_out() {
    this.storage.destroyToken();
    alert(this.fname+", you have logged out.");
    this.route.navigate(['/home']);
  }

  loggedIn() {
    this.token = this.storage.getToken();
    if(this.token) {
      this.data = this.storage.getData();
      this.fname = this.data[0].first_name;
      this.lname = this.data[0].last_name;
    }
    return this.token;
  }
}
