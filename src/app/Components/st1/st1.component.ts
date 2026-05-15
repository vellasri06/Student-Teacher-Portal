import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SerService } from 'src/app/ser.service';
@Component({
  selector: 'app-st1',
  templateUrl: './st1.component.html',
  styleUrls: ['./st1.component.css'],
})
export class St1Component {
  editindex = -1;
  message = '';
  enable=false;
  searchText='';
  constructor(public sc: SerService) { }
  ngOnInit() {
    this.sc.loadData();
  }
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    city: new FormControl(''),
    distance: new FormControl('', Validators.required),
    dob: new FormControl(''),
    gender: new FormControl(''),
    working: new FormControl('')
  })
  add1() {
    this.sc.students.push(this.form.value);
    this.form.reset()
    this.sc.savedata()
  }
  edit(i: number) {
    this.editindex = i;
    this.form.patchValue(this.sc.students[i]);
  }
  save() {
    if (this.editindex == -1) {
      this.sc.students.push(this.form.value)
    } else {
      this.sc.edit(this.editindex, this.form.value);
      this.editindex = -1;
      this.form.reset();
    }
    setTimeout(() => {
      this.message = ' '
    }, 2000);
  }
  show() {
    this.enable=true
  }
}
