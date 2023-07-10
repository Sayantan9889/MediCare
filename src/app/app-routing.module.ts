import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { SubProductComponent } from './Components/sub-product/sub-product.component';
import { SearchProductComponent } from './Components/Search/search-product/search-product.component';
import { SearchPrdDeatailComponent } from './Components/Search/search-prd-deatail/search-prd-deatail.component';
import { AboutUsComponent } from './Components/Commons/about-us/about-us.component';
import { CartComponent } from './Components/Commons/cart/cart.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'medicines', component:ProductsComponent},
  {path:'medicines/catagory/:id', component:SubProductComponent},
  {path:'medicines/catagory/:id/details/:pid', component:ProductDetailsComponent},
  {path:'search/:prod', component:SearchProductComponent},
  {path:'search/:prod/detail/:pid', component:SearchPrdDeatailComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }