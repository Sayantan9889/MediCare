import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/AuthServices/auth.service';
import { StorageService } from 'src/app/Services/AuthServices/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userDetails!: any;
  img_path!: string;
  baseUrl:string = "https://wtsacademy.dedicateddevelopers.us/";
  folderPath:string="uploads/user/profile_pic/";

  constructor(private authSer:AuthService, private storage:StorageService, private router:Router) {}

  ngOnInit():void {
    this.authSer.profile_details().subscribe((res:any) => {
      this.userDetails = res;
      // console.log("Recived profile details: ", this.userDetails);

      this.img_path = this.baseUrl+this.folderPath+this.userDetails?.data.profile_pic;
      // console.log("Image path: ", this.img_path);

    })
  }

  loggingOut() {
    let fname = this.storage.getData()[0].first_name;
    this.storage.destroyToken();
    alert(fname+", you have logged out.");
    this.router.navigateByUrl('/home');
  }
}
