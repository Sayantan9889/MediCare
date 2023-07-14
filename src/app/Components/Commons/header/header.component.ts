import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartItems!: any;

  constructor(private route: Router, private cartSer:CartService) { }

  ngOnInit():void {
    this.cartItems = this.cartSer.cartItem;
  }

  search(data: NgForm) {
    let Med = data.value.med;
    // console.log(Med);
    if (Med !== "") {  // checking if entered some text or not
      this.route.navigate([`search/${Med}`]);
    }
  }
}
