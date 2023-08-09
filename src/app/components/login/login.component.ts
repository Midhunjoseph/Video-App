import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/videoAppServices/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({})

  constructor(private formbuilder:FormBuilder,
    public loginservice: LoginService){}

  ngOnInit(): void {
    this.loginservice.isNewUser= false;
      this.loginForm = this.formbuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      })
  }

  public  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      // Here you can handle the login logic, e.g., authentication.
      console.log('Login form submitted:', formData);
      this.loginservice.login(formData).subscribe(
        result =>{
          console.log(result);
          
        },
        (err)=>{
          console.log(err);
          
        }
      )
    }
  }

  public newUserAccount(){
    this.loginservice.isNewUser= true;
  }

  public onEmailChanged(emailChanged:string){
    if(emailChanged !== null){
      this.loginForm.patchValue({
        username: emailChanged,
      })
    }
  }

}
