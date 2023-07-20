import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicinesService } from 'src/app/Services/medicines.service';
import { CartComponent } from '../cart/cart.component';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  btnTxt: string = "ADD TO CART";

  Id!: any;
  pId!: any;
  pCatagory!: any;
  product!: any;
  mrp!: any;

  constructor(private med: MedicinesService, private activedRoute: ActivatedRoute, public cart: CartService, private route: Router) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe((params) => {
      this.Id = params.get('id');
      this.pId = params.get('pid');
      // console.log("Collected Medicine catagory Id: ", this.Id);
      // console.log("Collected Medicine Id: ", this.pId);

      this.pCatagory = this.med.products.find((res) => this.Id === res.id);
      // console.log("Products catagory: ", this.pCatagory);

      this.product = this.pCatagory.medicine.filter((res: any) => this.pId === res.mid)
      console.log("Selected product: ", this.product);
    });
  }

  add_to_cart(prod: any) {
    this.cart.AddToCart(prod);
    this.btnTxt = "ADD MORE";
  }
}
