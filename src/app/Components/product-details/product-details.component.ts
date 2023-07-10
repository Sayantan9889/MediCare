import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicinesService } from 'src/app/Services/medicines.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  Id!: any;
  pId!: any;
  pCatagory!:any;
  product!:any;
  mrp!: any;

  constructor(private med:MedicinesService, private activedRoute:ActivatedRoute){}

  ngOnInit():void {
    this.activedRoute.paramMap.subscribe((params)=> {
      this.Id = params.get('id');
      this.pId =params.get('pid');
      // console.log("Collected Medicine catagory Id: ", this.Id);
      // console.log("Collected Medicine Id: ", this.pId);

      this.pCatagory = this.med.products.find((res) => this.Id===res.id);
      // console.log("Products catagory: ", this.pCatagory);

      this.product = this.pCatagory.medicine.filter((res:any) => this.pId===res.mid)
      console.log("Selected product: ", this.product);

      this.mrp = this.product[0].price*(120/100);   // 20% off so the MRP will be (offerPricr*(120/100))
    });
  }
}
