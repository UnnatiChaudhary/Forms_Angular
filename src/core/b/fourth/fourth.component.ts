import { Component } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrl: './fourth.component.css'
})
export class FourthComponent {
  pressed=false;
  Delete()
  {
    this.pressed=true;
    localStorage.clear();
  }
}
