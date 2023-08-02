import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { CartService } from 'src/app/Services/cart.service';
import { MedicinesService } from 'src/app/Services/medicines.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent {
  searchText!: any;
  products!: any;
  allProd: {
    mid: '',
    mName: '',
    genericName: '',
    mImg1: '',
    mImg2: '',
    uses: '',
    expiry: '',
    price: '',
    featuredProd: ''
  }[] = [];
  searchedProd!: any;
  searchedProdLen!: number;

  constructor(private med: MedicinesService, private activateRoute: ActivatedRoute, private cart: CartService, private _toastService: ToastService) { }

  ngOnInit(): void {
    this.products = this.med.products;
    // console.log("Products: ", this.products);
    /* ---- adding all mdicines and healthcare products in to an array-object named 'allPrd' ---- */
    for (let i of this.products) {
      for (let j of i.medicine) {
        this.allProd.push(j);
      }
    }
    // console.log("AllProducts: ", this.allProd);

    // this.searchText = this.activateRoute.snapshot.paramMap.get('prod'); //it works but not for repetative searching. need refress to search again
    this.activateRoute.paramMap.subscribe((params) => {
      this.searchText = params.get('prod');
      // console.log("Collected product name: ", this.searchText);

      this.searchedProd = this.allProd.filter(prod => (prod.mName.toLowerCase().includes(this.searchText.toLowerCase())) || (prod.genericName.toLowerCase().includes(this.searchText.toLowerCase())));
      this.searchedProdLen = this.searchedProd.length;

      console.log("Searched Items: ", this.searchedProd);
    })
  }

  add_to_cart(product: any) {
    this.cart.AddToCart(product);
    this._toastService.info('Added to cart');
  }
}
