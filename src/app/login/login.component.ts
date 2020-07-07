import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
form:FormGroup;
submitted = false;
  constructor(private auth:AuthService, private myrouter:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form =  this.fb.group({
        email:['', [Validators.required, Validators.email]],
        password:['', [Validators.required]]
    })
  }

    // convenience getter for easy access to form fields
    get ferror() {
      return this.form.controls;
    }
    
  login(){
      this.submitted = true;
      if (this.form.invalid) {
        return;
      }
      this.auth.sendToken(this.form.value.email);
      this.myrouter.navigate(['home']);
 
  }


}
