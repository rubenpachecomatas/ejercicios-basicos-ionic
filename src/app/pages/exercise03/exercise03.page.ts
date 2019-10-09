import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise03',
  templateUrl: './exercise03.page.html',
  styleUrls: ['./exercise03.page.scss'],
})
export class Exercise03Page implements OnInit {

  n: number = 0;

  constructor() { }

  incValue(v): void {
    this.n += v;
  }

  reset() {
    this.n = 0;
  }

  ngOnInit() {
  }

}
