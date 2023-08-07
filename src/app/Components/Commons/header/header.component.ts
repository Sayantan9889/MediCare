import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/AuthServices/auth.service';
import { StorageService } from 'src/app/Services/AuthServices/storage.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartItems!: any;
  token!: any;
  data!: any;
  fname!: string;
  lname!: string;

  userDetails!: any;
  img_path!: string;
  baseUrl: string = "https://wtsacademy.dedicateddevelopers.us/";
  folderPath: string = "uploads/user/profile_pic/";

  constructor(private route: Router,
    private cartSer: CartService,
    private storage: StorageService,
    private authSer: AuthService
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartSer.cartItem;
  }

  // search(data: NgForm) { //Search by pressing seach button
  //   let Med = data.value.med;
  //   // console.log(Med);
  //   if (Med !== "") {  // checking if entered some text or not
  //     this.route.navigate([`search/${Med}`]);
  //   }
  // }
  search(event: Event) {  //Search by typing
    let Med = (event?.target as HTMLInputElement)?.value;
    // console.log(Med);
    if (Med !== "") {
      this.route.navigate([`search/${Med}`]);
    }
  }


  log_out() {
    this.storage.destroyToken();
    alert(this.fname + ", you have logged out.");
    this.route.navigate(['/home']);
  }

  loggedIn() {
    this.token = this.storage.getToken();
    if (this.token) {
      this.data = this.storage.getData();
      this.fname = this.data[0].first_name;
      this.lname = this.data[0].last_name;

      if (this.img_path == null) {
        this.img_path = this.baseUrl + this.folderPath + this.data[0].proImg;
        console.log(this.img_path);
      }

      // if (this.img_path == undefined) {
      //   this.authSer.profile_details().subscribe((res: any) => {
      //     this.userDetails = res;
      //     // console.log("Recived profile details: ", this.userDetails);

      //     this.img_path = this.baseUrl + this.folderPath + this.userDetails?.data.profile_pic;
      //     console.log("Image path: ", this.img_path);

      // })
      // }

    }
    return this.token;
  }






  //--------Bellow code shows how you fetch location path--------
  // constructor(private location:Location) {}                  |
  // activeLoc() {                                              |
  //   console.log("Location: ", this.location.path());         |
  //   return this.location.path();                             |
  // }                                                          |
  //-------------------------------------------------------------
}
