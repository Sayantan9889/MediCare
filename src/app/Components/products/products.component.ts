import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { StorageService } from 'src/app/Services/AuthServices/storage.service';
import { CartService } from 'src/app/Services/cart.service';
import { MedicinesService } from 'src/app/Services/medicines.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  abc!: any;
  allopathic!: any;
  ayurvedic!: any;
  healthcare!: any;
  AlloValue!: any;  //to store sliced and full array when pressing show more & show less button
  AyurValue!: any;  //to store sliced and full array when pressing show more & show less button
  HealthValue!: any;  //to store sliced and full array when pressing show more & show less button

  constructor(private med: MedicinesService,
    private cart: CartService,
    private router: Router,
    private _toastService: ToastService,
    private storage:StorageService) { }

  ngOnInit(): void {
    this.abc = this.med.products;
    /* ------- Allopathic -------- */
    this.allopathic = this.med.products[0].medicine;
    // console.log("All allopathic: ", this.allopathic);
    this.AlloValue = this.allopathic?.slice(0, 5); // To show only 5 product at first [before onClick()]
    // console.log("First 5 allopathic: ", this.AlloValue);
    /* ------- Allopathic -------- */

    /* ------- Ayurvedic -------- */
    this.ayurvedic = this.med.products[1].medicine;
    // console.log("All ayurvedic: ", this.ayurvedic);
    this.AyurValue = this.ayurvedic?.slice(0, 5); // To show only 5 product at first [before onClick()]
    // console.log("First 5 ayurvedic: ", this.AyurValue);
    /* ------- Ayurvedic -------- */

    /* ------- Healthcare -------- */
    this.healthcare = this.med.products[2].medicine;
    // console.log("All ayurvedic: ", this.healthcare);
    this.HealthValue = this.healthcare?.slice(0, 5); // To show only 5 product at first [before onClick()]
    // console.log("First 5 healthcare: ", this.HealthValue);
    /* ------- Healthcare -------- */
  }




  /* ----------------- Show more and Show less button ------------------ */
  /* ------- Allopathic -------- */
  btnTitle1 = "Show more";
  AlloClick() {
    // first, if btnTitle's value is 'Show more' before click then change its value to 'Show less', and vice-versa
    this.btnTitle1 = (this.btnTitle1 === "Show more") ? "Show less" : "Show more";
    // then, store all elements or sliced elements of allopathic into the variable value. this value[] array will be displayed in html
    this.AlloValue = (this.btnTitle1 === "Show less") ? this.allopathic.slice(0, 10) : this.allopathic.slice(0, 5);
  }
  AlloClick2() {
    this.router.navigate([`medicines/catagory/${'m1'}`]);
  }
  /* ------- Allopathic -------- */
  /* ------- Ayurvedic -------- */
  btnTitle2 = "Show more";
  AyurClick() {
    // first, if btnTitle's value is 'Show more' before click then change its value to 'Show less', and vice-versa
    this.btnTitle2 = (this.btnTitle2 === "Show more") ? "Show less" : "Show more";
    // then, store all elements or sliced elements of ayurvedic into the variable value. this value[] array will be displayed in html
    this.AyurValue = (this.btnTitle2 === "Show less") ? this.ayurvedic.slice(0, 10) : this.ayurvedic.slice(0, 5);
  }
  AyurClick2() {
    this.router.navigate([`medicines/catagory/${'m2'}`]);
  }
  /* ------- Ayurvedic -------- */
  /* ------- Ayurvedic -------- */
  btnTitle3 = "Show more";
  HealthClick() {
    // first, if btnTitle's value is 'Show more' before click then change its value to 'Show less', and vice-versa
    this.btnTitle3 = (this.btnTitle3 === "Show more") ? "Show less" : "Show more";
    // then, store all elements or sliced elements of ayurvedic into the variable value. this value[] array will be displayed in html
    this.HealthValue = (this.btnTitle3 === "Show less") ? this.healthcare.slice(0, 10) : this.healthcare.slice(0, 5);
  }
  HealthClick2() {
    this.router.navigate([`medicines/catagory/${'m3'}`]);
  }
  /* ------- Ayurvedic -------- */




  add_to_cart(product: any) {
    if (this.loggedIn()) {
      this.cart.AddToCart(product);
      this._toastService.info('Added to cart');
    }
    else {
      Swal.fire('LOGIN !', 'You need to log in first!', 'info');  // sweetAlert2 - see app.module.ts
    }
  }

  loggedIn() {
    return this.storage.getToken();
  }
}
