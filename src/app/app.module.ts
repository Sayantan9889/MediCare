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
import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './Components/Auth/profile/profile.component';
import { HttpInterceptorService } from './Services/AuthServices/http-interceptor.service';
import { AppointmentComponent } from './Components/Appointments/appointment/appointment.component';  // angular tostify
import { ContactUsComponent } from './Components/Commons/contact-us/contact-us.component';
import { AddressComponent } from './Components/Buy/address/address.component';
import { PaymentComponent } from './Components/Buy/payment/payment.component';

// https://www.npmjs.com/package/angular-toastify
import { ToastService, AngularToastifyModule } from 'angular-toastify';

// https://www.npmjs.com/package/ngx-pagination
import { NgxPaginationModule } from 'ngx-pagination';

// https://sweetalert2.github.io/   - This is an alert. I've used it to alert in AuthGuard [https://youtu.be/TtxubH6HCak]

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
    OfferPipe,
    ProfileComponent,
    AppointmentComponent,
    ContactUsComponent,
    PaymentComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,   // for owl carousel
    BrowserAnimationsModule,    // for owl carousel
    HttpClientModule,
    AngularToastifyModule, // for tostify
    NgxPaginationModule // to use pagination
  ],
  providers: [
    MedicinesService,
    CartService,
    OfferPipe,   // To use OfferPipe in cart service
    ToastService,  // to use tostify
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
