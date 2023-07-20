import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { SubProductComponent } from './Components/sub-product/sub-product.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';    // for owl carousel
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    // for owl carousel
import { MedicinesService } from './Services/medicines.service';
import { HeaderComponent } from './Components/Commons/header/header.component';
import { FooterComponent } from './Components/Commons/footer/footer.component';
import { SearchProductComponent } from './Components/Search/search-product/search-product.component';
import { SearchPrdDeatailComponent } from './Components/Search/search-prd-deatail/search-prd-deatail.component';
import { AboutUsComponent } from './Components/Commons/about-us/about-us.component';
import { CartComponent } from './Components/cart/cart.component';
import { CartService } from './Services/cart.service';
import { CartBadgePipe } from './AllPipe/cart-badge.pipe';
import { LoginComponent } from './Components/Auth/login/login.component';
import { SignupComponent } from './Components/Auth/signup/signup.component';
import { OfferPipe } from './AllPipe/offer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    SubProductComponent,
    ProductDetailsComponent,
    HeaderComponent,
    FooterComponent,
    SearchProductComponent,
    SearchPrdDeatailComponent,
    AboutUsComponent,
    CartComponent,
    CartBadgePipe,
    LoginComponent,
    SignupComponent,
    OfferPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,   // for owl carousel
    BrowserAnimationsModule    // for owl carousel
  ],
  providers: [
    MedicinesService,
    CartService,
    OfferPipe   // To use OfferPipe in cart service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
