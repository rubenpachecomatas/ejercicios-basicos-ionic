import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise05',
  templateUrl: './exercise05.page.html',
  styleUrls: ['./exercise05.page.scss'],
})
export class Exercise05Page implements OnInit {

  n: number;
  max: number = 0;
  min: number = 0;

  constructor() { }

  ngOnInit() {
  }

  generateRandom() {
    this.n = +this.max + Math.floor(Math.random() * (this.min - this.max + 1));
  }

}
