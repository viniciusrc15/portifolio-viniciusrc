import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  year;
  constructor() {
    this.year = new Date();
  }

  ngOnInit() {
    this.year = this.year.getFullYear() - 1996;
  }

}
