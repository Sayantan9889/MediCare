import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  status!: boolean;
  wait: boolean = true;

  constructor(private cart: CartService, private router: Router) { }

  onPay() {
    this.status = true;
    setTimeout(() => {
      this.wait = false;
      this.cart.clearCart();
      this.status = false;
    }, 3000);
    this.wait = true;
  }
}
