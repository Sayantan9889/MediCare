import { Injectable } from '@angular/core';

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
    featuredProd: string
  }[] = [];

  constructor() { }
}
