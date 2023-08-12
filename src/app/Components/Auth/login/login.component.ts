import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/AuthServices/auth.service';
import { StorageService } from 'src/app/Services/AuthServices/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  logData!: FormGroup;

  constructor(private fb: FormBuilder, private AuthSer: AuthService, private storage: StorageService) { }

  ngOnInit(): void {
    this.logData = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    });

  }

  logIn() {
    this.AuthSer.login_user(this.logData.value).subscribe(
      (user: any) => {
        // console.log("User details: ", user);
        let userResponse = user;

        if (user.status === 200) {
          // alert("Welcome " + userResponse.data.first_name + " " + userResponse.data.last_name + " !");
          this.sweet_alert_2("Welcome " + userResponse.data.first_name + " " + userResponse.data.last_name + " !");

          this.storage.setData(userResponse.data.first_name, userResponse.data.last_name, userResponse.data.email, userResponse.token, userResponse.data.profile_pic);
        }
        else {
          // alert(userResponse.message);
          Swal.fire('Try Again', userResponse.message, 'error');  // sweetAlert2 - see app.module.ts
          this.logData.reset();
        }


        // document.getElementById('ModalForm')?.style.setProperty('display', 'none');
      },
      (error:any) => {
        console.error(error);
        Swal.fire('Http failure response', error.message, 'error');  // sweetAlert2 - see app.module.ts
      }
      );
  }

  sweet_alert_2(msg: string) {
    Swal.fire({
      position: 'top',
      // icon: 'success',
      title: '<i class="fa-regular fa-face-grin-wide fa-bounce fa-2xl" style="color: #2dae6b; margin-top: 50px;"></i>',
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
