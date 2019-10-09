import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise01',
  templateUrl: './exercise01.page.html',
  styleUrls: ['./exercise01.page.scss'],
})
export class Exercise01Page implements OnInit {
  
  word: string;

  constructor() { }

  ngOnInit() {
    this.reset();
  }

  name() {
    this.word = "Rubén Pacheco Matas"
  }

  reset(): void {
    this.word = "";
  }

}
