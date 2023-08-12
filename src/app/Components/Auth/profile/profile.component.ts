import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/AuthServices/auth.service';
import { StorageService } from 'src/app/Services/AuthServices/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userDetails!: any;
  img_path!: string;
  baseUrl: string = "https://wtsacademy.dedicateddevelopers.us/";
  folderPath: string = "uploads/user/profile_pic/";

  constructor(private authSer: AuthService, private storage: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.authSer.profile_details().subscribe(
      (res: any) => {
        this.userDetails = res;
        // console.log("Recived profile details: ", this.userDetails);

        this.img_path = this.baseUrl + this.folderPath + this.userDetails?.data.profile_pic;
        // console.log("Image path: ", this.img_path);

      },
      (err) => {
        console.error(err);
        Swal.fire('Http failure response', err.message, 'error')
      })
  }

  loggingOut() {
    let fname = this.storage.getData()[0].first_name;
    this.storage.destroyToken();
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
        this.sweet_alert_2(fname + ", you have logged out!");
        this.storage.destroyToken();
      }
    })
    this.router.navigateByUrl('/home');
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
}
