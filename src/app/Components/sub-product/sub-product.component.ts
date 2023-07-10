import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicinesService } from 'src/app/Services/medicines.service';

@Component({
  selector: 'app-sub-product',
  templateUrl: './sub-product.component.html',
  styleUrls: ['./sub-product.component.scss']
})
export class SubProductComponent {
  cId!:any;
  catMedicine!:any;

  constructor(private med:MedicinesService, private activateRoute:ActivatedRoute){}

  ngOnInit():void {
    this.activateRoute.paramMap.subscribe((param) => {
      this.cId = param.get('id');
      // console.log("Colected id: ", this.cId);

      this.catMedicine = this.med.products.filter((i:any) => i.id===this.cId);
      // console.log("Catagorized Product: ", this.catMedicine);
    })
  }
}
