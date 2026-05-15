import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public route:Router,private au:AuthService){}
  form=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })
  show(){

  }
  reg(){
    this.au.register(this.form.value)
    this.route.navigate(['/login'])
  }
}
