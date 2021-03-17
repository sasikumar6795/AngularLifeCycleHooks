import { Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

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
    debugger; 
    const newNumberChange: SimpleChange = changes.myNewNumber;
    
    console.log('previous value of ng on changes', newNumberChange.previousValue);
    console.log('current value of ng on changes', newNumberChange.currentValue);
    this.myNewNumber = newNumberChange.currentValue;
  }

  ngOnInit(): void {

    console.log('current value of ng on init', this.myNewNumber);

  }

  ngDoCheck(): void {
    debugger;
  }

}
