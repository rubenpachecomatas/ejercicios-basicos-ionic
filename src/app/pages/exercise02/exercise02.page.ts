import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise02',
  templateUrl: './exercise02.page.html',
  styleUrls: ['./exercise02.page.scss'],
})
export class Exercise02Page implements OnInit {

  word: string = '';
  button: string = 'Mostrar nombre';

  constructor() { }

  ngOnInit() {

  }

  name() {
    if (this.word == '') {
      this.word = 'Rubén Pacheco Matas';
      this.button = 'Limpia pantalla';
    } else if (this.word != '') {
      this.word = '';
      this.button = 'Mostrar nombre';
    }
  }

}
