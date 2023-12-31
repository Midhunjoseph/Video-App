import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { VcConstants } from 'src/app/utils/vc-Constants';
import { LoginService } from 'src/app/videoAppServices/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({})

  constructor(private formbuilder: FormBuilder,
    public loginservice: LoginService,
    private snackbar: MatSnackBar,
    private vcConstants: VcConstants,
    private zone: NgZone,
    private router: Router) { }

  ngOnInit(): void {
    this.loginservice.isNewUser = false;
    this.loginForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      // Here you can handle the login logic, e.g., authentication.
      console.log('Login form submitted:', formData);
      this.loginservice.login(formData).subscribe(
        result => {
          console.log(result);
          if (result) {
            setTimeout(() => {
              this.onSuccess();
            }, 1000);
          }

        },
        (err) => {
          this.snackbar.open(this.vcConstants.dialogMessage.invalidPassword, '', {
            duration: 3000,
            panelClass: this.vcConstants.snackbarType.error
          })
        }
      )
    }
  }

  public newUserAccount() {
    this.loginservice.isNewUser = true;
  }

  public onEmailChanged(emailChanged: string) {
    if (emailChanged !== null) {
      this.loginForm.patchValue({
        username: emailChanged,
      })
    }
  }

  private onSuccess() {
    this.zone.run(() => {
      this.router.navigateByUrl(this.vcConstants.web_router_link.home);
    });
  }
}

