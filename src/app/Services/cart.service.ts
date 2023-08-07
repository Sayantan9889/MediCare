import { Injectable } from '@angular/core';
import { OfferPipe } from '../AllPipe/offer.pipe';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItem: {
    mid: string,
    mName: string,
    genericName: string,
    mImg1: string,
    mImg2: string,
    uses: string,
    expiry: string,
    price: string,
    featuredProd: string,
    quantity: number,
    offerPrice: number,
    totalPrice: number
  }[] = [];

  constructor(private OfferPIPE: OfferPipe) { }


  AddToCart(product: any) {
    // console.log("Product to add in cart: ",product);

    let cartItemsss = this.cartItem;
    // console.log("Length of cart array:",cartItemsss.length);


    if (cartItemsss.length > 0) {
      let p = cartItemsss.findIndex((prod) => prod.mid === product.mid)
      // console.log("Index:", p);

      if (p !== -1) {
        let data: any = cartItemsss.find((prod) => prod.mid === product.mid);

        let cart_prod = {
          ...data,
          quantity: data.quantity + 1,
          offerPrice: this.OfferPIPE.transform(product.price, 20),
          totalPrice: this.OfferPIPE.transform(product.price, 20) * (data.quantity + 1)
        }

        cartItemsss.splice(p, 1, cart_prod)
        console.log("After pushing the item: ", this.cartItem);
      }
      else {
        let cart_prod = {
          ...product,
          quantity: 1,
          offerPrice: this.OfferPIPE.transform(product.price, 20),
          totalPrice: this.OfferPIPE.transform(product.price, 20)
        }

        this.cartItem.push(cart_prod);
        console.log("After pushing the item: ", this.cartItem);
      }

    }
    else {
      let cart_prod = {
        ...product,
        quantity: 1,
        offerPrice: this.OfferPIPE.transform(product.price, 20),
        totalPrice: this.OfferPIPE.transform(product.price, 20)
      }

      this.cartItem.push(cart_prod);
      console.log("After pushing the item: ", this.cartItem);

    }
  }

  clearCart() {
    this.cartItem.splice(0, this.cartItem.length);
  }
}
