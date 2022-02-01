import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter: number = 0;
  constructor() { }

  Increment()
  {
    this.counter++;
  }

  Decrement()
  {
    this.counter--;
  }

  ngOnInit(): void {
  }

}
