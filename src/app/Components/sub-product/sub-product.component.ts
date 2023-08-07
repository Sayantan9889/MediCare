import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { StorageService } from 'src/app/Services/AuthServices/storage.service';
import { CartService } from 'src/app/Services/cart.service';
import { MedicinesService } from 'src/app/Services/medicines.service';

@Component({
  selector: 'app-sub-product',
  templateUrl: './sub-product.component.html',
  styleUrls: ['./sub-product.component.scss']
})
export class SubProductComponent implements OnInit {
  p: number = 1;  // used in pagination

  cId!: any;
  catMedicine!: any;

  constructor(private med: MedicinesService,
    private activateRoute: ActivatedRoute,
    private cart: CartService,
    private _toastService: ToastService,
    private storage:StorageService) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param) => {
      this.cId = param.get('id');
      // console.log("Colected id: ", this.cId);

      this.catMedicine = this.med.products.filter((i: any) => i.id === this.cId);
      // console.log("Catagorized Product: ", this.catMedicine);
    })
  }

  add_to_cart(product: any) {
    if (this.loggedIn()) {
      this.cart.AddToCart(product);
      this._toastService.info('Added to cart');
    }
    else {
      alert("Please log in first")
    }
  }

  loggedIn() {
    return this.storage.getToken();
  }
}
