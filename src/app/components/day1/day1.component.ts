import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-day1',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './day1.component.html',
  styleUrl: './day1.component.css'
})
export class Day1Component {
  inputText1: string = '';
  logInput() {
    console.log(this.inputText1);
  }

  inputText2: string = '';
  displayedText: string = '';
  displayText() {
    this.displayedText = this.inputText2;
  }

  inputText3 : string = "";
}
