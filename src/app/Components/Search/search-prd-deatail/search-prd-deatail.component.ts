import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { MedicinesService } from 'src/app/Services/medicines.service';

@Component({
  selector: 'app-search-prd-deatail',
  templateUrl: './search-prd-deatail.component.html',
  styleUrls: ['./search-prd-deatail.component.scss']
})
export class SearchPrdDeatailComponent {
  pId!: any;
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
  mrp!: any;
  btnTxt = 'ADD TO Cart';

  constructor(private med: MedicinesService, private activateRoute: ActivatedRoute, private cart: CartService) { }

  ngOnInit(): void {
    this.products = this.med.products;
    // console.log("Products: ", this.products);
    for (let i of this.products) {
      for (let j of i.medicine) {
        this.allProd.push(j);
      }
    }
    // console.log("AllProducts: ", this.allProd);

    this.activateRoute.paramMap.subscribe((params) => {
      this.pId = params.get('pid');
      // console.log("Collected product name: ", this.pid);

      this.searchedProd = this.allProd.filter((prod) => this.pId===prod.mid);
      console.log("Searched Items: ", this.searchedProd);
    })
  }

  add_to_cart(product: any) {
    this.cart.AddToCart(product);
    this.btnTxt = "ADD MORE";
  }
}
