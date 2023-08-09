import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/videoAppServices/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({})
  @Input() emailValue: string | undefined;
  @Output() emailValueChange: EventEmitter<string> = new EventEmitter;

  constructor(private formBuilder: FormBuilder,
    public loginService: LoginService){}

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
          console.log(result);
          
        },
        (err) =>{
          console.log(err);
          
        }
      )
    }
  }

  public onClickLogin(){
    this.loginService.isNewUser= false;
    this.emailValueChange.emit(this.registerForm.value.email)
    console.log("gare");
    
  }

}
