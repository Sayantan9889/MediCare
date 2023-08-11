import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/Services/AuthServices/storage.service';
import { CartService } from 'src/app/Services/cart.service';
import Swal from 'sweetalert2';

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
  img_path: string = "";
  baseUrl: string = "https://wtsacademy.dedicateddevelopers.us/";
  folderPath: string = "uploads/user/profile_pic/";

  constructor(private route: Router,
    private cartSer: CartService,
    private storage: StorageService
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
    // this.storage.destroyToken();
    // this.sweet_alert_2(this.fname + ", you have logged out!");
    // // this.storage.destroyToken();

    Swal.fire({
      position: 'top',
      title: '<i class="fa-regular fa-face-tired fa-beat-fade fa-2xl" style="color: #ffca2c; margin-top: 50px;"></i>',
      text: "Are you sure you want to log out?",
      // icon: 'warning',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#fe6869',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.storage.destroyToken();
        //makig this.img_path empty will make sure that the 'if-condition' in loggedIn() [line-85] is enabled when logging in 2nd time.
        this.img_path = "";
        this.sweet_alert_2(this.fname + ", you have logged out!");
      }
    })
  }

  loggedIn() {
    this.token = this.storage.getToken();
    if (this.token) {
      this.data = this.storage.getData();
      this.fname = this.data[0].first_name;
      this.lname = this.data[0].last_name;

      if (this.img_path == "") {  // using this 'if' to stop it iterating multipe time whenever hitting a new component
        this.img_path = this.baseUrl + this.folderPath + this.data[0].proImg;
        console.log(this.img_path);
      }
    }
    return this.token;
  }

  sweet_alert_2(msg: string) {
    Swal.fire({
      position: 'top',
      icon: 'success',
      // title: '<i class="fa-regular fa-face-tired fa-shake fa-2xl" style="color: #ffca2c; margin-top: 50px;"></i>',
      html: msg,
      timer: 3000,
      timerProgressBar: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then((result) => {
      /* Read more about handling dismissals below - https://sweetalert2.github.io/ */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer _by sweetalert2')
      }
    })
  }






  //--------Bellow code shows how you fetch location path--------
  // constructor(private location:Location) {}                  |
  // activeLoc() {                                              |
  //   console.log("Location: ", this.location.path());         |
  //   return this.location.path();                             |
  // }                                                          |
  //-------------------------------------------------------------
}
