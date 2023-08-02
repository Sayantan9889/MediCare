import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { CartService } from 'src/app/Services/cart.service';
import { MedicinesService } from 'src/app/Services/medicines.service';

@Component({
  selector: 'app-sub-product',
  templateUrl: './sub-product.component.html',
  styleUrls: ['./sub-product.component.scss']
})
export class SubProductComponent implements AfterViewInit{
  p:number = 1;  // used in pagination

  cId!: any;
  catMedicine!: any;
  @ViewChild('target') 'Target':ElementRef<any>; //To scroll to top every time enter the component

  constructor(private med: MedicinesService, private activateRoute: ActivatedRoute, private cart: CartService, private _toastService: ToastService) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param) => {
      this.cId = param.get('id');
      // console.log("Colected id: ", this.cId);

      this.catMedicine = this.med.products.filter((i: any) => i.id === this.cId);
      // console.log("Catagorized Product: ", this.catMedicine);
    })

    this.Target.nativeElement.scrollIntoView(); //To scroll to top every time enter the component
  }

  ngAfterViewInit() {
    //Same line need both here and above in ngOnInit to work properly
    this.Target.nativeElement.scrollIntoView(); // To scroll to top every time enter the component
  }

  add_to_cart(product: any) {
    this.cart.AddToCart(product);
    this._toastService.info('Added to cart');
  }
}
