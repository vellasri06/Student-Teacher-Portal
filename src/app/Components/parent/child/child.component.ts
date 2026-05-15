import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()  students:any;
  @Output() events=new EventEmitter<string>();
  send(){
  this.events.emit("hello");
  }
}
