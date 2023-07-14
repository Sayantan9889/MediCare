import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cartBadge',
  pure: false
})
export class CartBadgePipe implements PipeTransform {

  transform(cartItems: any): unknown {
    let cartItemNo = 0;
    for(let i of cartItems){
      cartItemNo += 1;
    }
    return cartItemNo;
  }

}
