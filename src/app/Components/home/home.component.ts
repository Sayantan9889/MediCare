import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';
import { MedicinesService } from 'src/app/Services/medicines.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  medicines !: any;
  allProd: {
    mid: '',
    mName: '',
    genericName: '',
    mImg1: '',
    mImg2: '',
    uses: '',
    expiry: '',
    price: '',
    // featuredProd: any
    featuredProd: ''
  }[] = [];
  onlyFeatureProd: {
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

  constructor(private med: MedicinesService) { }

  ngOnInit(): void {
    this.medicines = this.med.products;
    // console.log("Medicines: ", this.medicines);
    /* ---- adding all mdicines and healthcare products in to an array-object named 'allPrd' ---- */
    for (let i of this.medicines) {
      for (let j of i.medicine) {
        this.allProd.push(j);
      }
    }
    // console.log("AllProducts: ", this.allProd);
    /* ---- Now inserting all featured product into 'onlyFeatureProd' array-of-object ---- */
    for(let f of this.allProd)
    {
      // console.log(f.featuredProd);
      // if(f.featuredProd === 'true') { /* ---- this will work only when type of featuredProd will be 'any'. [line-21] ---- */
      if(String(f.featuredProd) === String('true')) {
        this.onlyFeatureProd.push(f);
        //  console.log("Feature: ", f);
      }
    }
    // console.log("Feature: ", this.onlyFeatureProd);
  }



  /* for Owl Carousel */
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    // animateOut: 'fadeOut',
    navSpeed: 700,
    // navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
}
