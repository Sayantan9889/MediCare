import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { AuthService } from 'src/app/Services/AuthServices/auth.service';
import { StorageService } from 'src/app/Services/AuthServices/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  regData!: FormGroup;
  formValue!: any;
  selectedImg!: File;

  constructor (private fb:FormBuilder, private AuthSer:AuthService, private storage:StorageService) {}

  ngOnInit():void {
    this.regData = this.fb.group({
        first_name: ['', [Validators.required, Validators.pattern("^([A-Z]{1}[A-Za-z]{2,30})")]],
        last_name: ['', [Validators.required, Validators.pattern("^([A-Z]{1}[A-Za-z]{2,30})")]],
        email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    });
  }

  onFileSelection(ev:any) {
    // console.log("onFileSection: ", ev);
    this.selectedImg = ev.target.files[0];
    // console.log("Selected image: ", this.selectedImg);
  }

  register(){
    this.formValue = this.regData.value;
    console.log("Received registration data: ", this.formValue);

    // to adding profile pic
    const formData:FormData = new FormData();
    formData.append('first_name', this.formValue.first_name);
    formData.append('last_name', this.formValue.last_name);
    formData.append('email', this.formValue.email);
    formData.append('password', this.formValue.password);
    formData.append('profile_pic', this.selectedImg, this.selectedImg.name);

    this.AuthSer.register_user(formData).subscribe((user:any) => {
      // console.log("Registered User's data: ", user);

      if(user.status === 200) {
        // alert("Registration Successful: "+user.message);
        this.sweet_alert_2(user.message);
      } else {
        Swal.fire('Registration failed', user.message, 'error');  // sweetAlert2 - see app.module.ts
      }
    });
  }

  sweet_alert_2(msg:string) {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Registration Successful',
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
