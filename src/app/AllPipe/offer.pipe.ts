import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offer'
})
export class OfferPipe implements PipeTransform {

  transform(price: number, offer: number): number {
    // let offer_price = price*0.8; // it also calculate 20% off
    let offer_price = price * ((100-offer)/100);
    return offer_price;
  }

}
