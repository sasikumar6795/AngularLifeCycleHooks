import { Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  private myNumber : number;

  @Input()
  myName: string;

  @Input()
  set myNewNumber(number: number)
  {
    this.myNumber = number;
  }

  get myNewNumber()
  {
    return this.myNumber;
  }
  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {

    const newNumberChange: SimpleChange = changes.myNewNumber;
    debugger; 
    console.log('previous value of ng on changes', newNumberChange.previousValue);
    console.log('current value of ng on changes', newNumberChange.currentValue);
    this.myNewNumber = newNumberChange.currentValue;
  }

  ngOnInit(): void {
  }

}
