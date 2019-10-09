import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise07',
  templateUrl: './exercise07.page.html',
  styleUrls: ['./exercise07.page.scss'],
})
export class Exercise07Page implements OnInit {

  pesetas = 0;
  euros = 0;

  constructor() { }

  ngOnInit() {
  }

  uPesetas() {
    this.pesetas = this.euros * 166.386;
  }

  uEuros() {
    this.euros = this.pesetas / 166.386;
  }

}
