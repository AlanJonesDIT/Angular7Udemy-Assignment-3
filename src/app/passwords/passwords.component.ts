import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passwords',
  templateUrl: './passwords.component.html',
  styleUrls: ['./passwords.component.css']
})
export class PasswordsComponent implements OnInit {
  toggleButton = true;
  toggleCount = [];

  constructor() { }

  ngOnInit() {
  }

  onButtonToggle() {
    this.toggleButton = !this.toggleButton;
    // this.toggleCount.push(this.toggleCount.length + 1);
    this.toggleCount.push(new Date());
  }

}
