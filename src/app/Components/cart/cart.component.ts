import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items!: any;
  GrandTotalPrice!: number;

  constructor(public cart: CartService) { }

  ngOnInit(): void {
    this.items = this.cart.cartItem;
    // console.log("Medicine added in the cart are: ", this.items);

    // Calculating grand total
    this.grandTotal();
  }

  removeItem(prod: any, index: any) {
    for (let res of this.cart.cartItem) {
      if (res.mid == prod.mid) {
        this.cart.cartItem.splice(index, 1);
        console.log("After removing ", prod.mName, " from cart list: ", this.cart.cartItem);

        this.grandTotal();    // updating this.GrandTotalPrice

        break;   // to break the loop after deleting a item, because if it has multiple same item it will not work properly
      }
    }
  }

  grandTotal() {
    this.GrandTotalPrice = 0;
    this.cart.cartItem.map((res: any) => {
      this.GrandTotalPrice += Number(res.totalPrice);
    });
  }
}
