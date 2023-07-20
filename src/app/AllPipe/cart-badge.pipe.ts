import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cartBadge',
  pure: false
})
export class CartBadgePipe implements PipeTransform {

  transform(cartItems: any): unknown {
    // console.log("cartItems from pipe: ",cartItems);

    let cartItemNo = 0;
    for(let i of cartItems){
      cartItemNo += i.quantity;
    }
    return cartItemNo;
  }

}
