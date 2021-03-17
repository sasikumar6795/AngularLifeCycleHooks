import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  private number : number = 23456;

  name: string = 'sasi';
  getNumber()
  {
    return this.number;
  }

  setNumber(number: number)
  {
    this.number = number;
  }


  increment()
  {
    this.number++;
  }


  decrement()
  {
    this.number--;
  }


}
