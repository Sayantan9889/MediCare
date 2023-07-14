import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  // cartItems: {
  //   mid: string,
  //   mName: string,
  //   genericName: string,
  //   mImg1: string,
  //   mImg2: string,
  //   uses: string,
  //   expiry: string,
  //   price: string,
  //   featuredProd: string
  // }[] = [];

  items!: any;
  GrandTotalPrice!: number;

  constructor(public cart: CartService) { }

  ngOnInit(): void {
    this.items = this.cart.cartItem;
    console.log("Medicine added in the cart are: ", this.items);

    // Calculating grand total
    this.grandTotal();
  }

  removeItem(prod: any, index: any) {
    this.cart.cartItem.map((res: any) => {
      if (res.mid == prod.mid) {
        this.cart.cartItem.splice(index, 1);
        console.log("After removing ", prod.mName, " from cart list: ", this.cart.cartItem);

        // updating this.GrandTotalPrice
        this.grandTotal();
      }
    });
  }

  grandTotal() {
    this.GrandTotalPrice = 0;
    this.cart.cartItem.map((res: any) => {
      this.GrandTotalPrice += Number(res.price);
    });
  }
}
