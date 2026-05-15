import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stu',
  templateUrl: './stu.component.html',
  styleUrls: ['./stu.component.css']
})
export class StuComponent {
   form=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    city:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
   })
   submit(){
    console.log(this.form.value);
    this.form.reset();
   }
}
