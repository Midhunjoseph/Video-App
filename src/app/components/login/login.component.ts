import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({})

  constructor(private formbuilder:FormBuilder){}

  ngOnInit(): void {
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
    }
  }
}
