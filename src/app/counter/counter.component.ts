import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/app.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter$ = this.store.select('app');
  constructor(private store: Store<{app:IAppState}>) { }

  Increment()
  {
    //this.counter$++;
  }

  Decrement()
  {
    //this.counter$--;
  }

  ngOnInit(): void {
  }

}
