import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { VcConstants } from 'src/app/utils/vc-Constants';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/videoAppServices/login.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({})
  @Input() emailValue: string | undefined;
  @Output() emailValueChange: EventEmitter<string> = new EventEmitter;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    public loginService: LoginService,
    private vcConstants: VcConstants,
    private snackbar: MatSnackBar){}

  ngOnInit(): void {
      this.loginService.isNewUser = true;
      this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['',Validators.required],
        password: ['', Validators.required]
      })

      if(this.emailValue !== null){
        this.registerForm.patchValue({
          email: this.emailValue
        })
      }
  }

  public onSubmit(){
    if(this.registerForm.valid){
      const formData = this.registerForm.value;
      console.log("register",formData);
      this.loginService.signup(formData).subscribe(
        result => {
          console.log("result",result);
          if(result){
            Swal.fire('', 'Register successfully', 'success');
            this.onClickLogin()
          }
          
        },
        (err) =>{
          Swal.fire('Oops!', 'Registration failed', 'error');
          // this.snackbar.open('This is a snackbar with an action button','',{
          //   duration: 3000,
          //   panelClass: 'error-snackbar'
          // })
          
        }
      )
    }
  }

  public onClickLogin(){
    this.loginService.isNewUser= false;
    this.emailValueChange.emit(this.registerForm.value.email)

  }

}
