import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  isDisabled = false
  name = "mani"
  data = ""
  myFun(e:Event){
    const v = (e.target as HTMLInputElement).value
    console.log(v);
  }

  users = [
    {name:"mani", age:23, city:"bargarh"},
    {name:"mani", age:12, city:"bargarh"},
    {name:"mani", age:23, city:"bargarh"},
  ]

  // input decorator   i.e parent to child data transfer
  @Input({alias : "name"}) componentName = ""

  // Output decorator   i.e child to parent data transfer
  // inorder to pass the data from child to parent ,we have to emit an event in the 
  // child component and listen in the parent class
  @Output() myEvent = new EventEmitter<string>();
  sendData(){
    this.myEvent.emit("data from child")
  }
}
