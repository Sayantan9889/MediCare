import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/AuthServices/auth.service';
import { StorageService } from 'src/app/Services/AuthServices/storage.service';

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
    this.AuthSer.login_user(this.logData.value).subscribe((user: any) => {
      // console.log("User details: ", user);
      let userResponse = user;

      if (user.status === 200) {
        alert("Welcome " + userResponse.data.first_name + " " + userResponse.data.last_name + " !");

        this.storage.setData(userResponse.data.first_name, userResponse.data.last_name, userResponse.data.email, userResponse.token, userResponse.data.profile_pic);
      }
      else {
        alert(userResponse.message);
        this.logData.reset();
      }


      // document.getElementById('ModalForm')?.style.setProperty('display', 'none');
    });
  }
}
