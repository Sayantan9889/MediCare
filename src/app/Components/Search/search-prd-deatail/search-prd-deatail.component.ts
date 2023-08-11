import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { StorageService } from 'src/app/Services/AuthServices/storage.service';
import { CartService } from 'src/app/Services/cart.service';
import { MedicinesService } from 'src/app/Services/medicines.service';
import Swal from 'sweetalert2';

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
  btnTxt = 'ADD TO CART';

  constructor(private med: MedicinesService, private activateRoute: ActivatedRoute, private cart: CartService, private storage: StorageService, private _toastService: ToastService) { }

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

      this.searchedProd = this.allProd.filter((prod) => this.pId === prod.mid);
      // console.log("Searched Items: ", this.searchedProd);
    })
  }

  add_to_cart(product: any) {
    if (this.loggedIn()) {
      this.cart.AddToCart(product);
      this.btnTxt = "ADD MORE";
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
