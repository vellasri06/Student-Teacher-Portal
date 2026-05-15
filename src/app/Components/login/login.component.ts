import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  msg='';
  constructor(public route:Router,private au:AuthService){}
   form=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
   })
   login(){
      if(this.au.login(this.form.value)){
        this.route.navigate(['dashboard'])
      }else{
        this.msg="Invalid";
      }
   }
}
