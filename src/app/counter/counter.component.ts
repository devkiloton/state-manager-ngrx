import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { decrementCounter, ICounterState, incrementCounter } from '../store/app.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(
    private store: Store<{app:ICounterState}>
  ) { }

  counter$ = this.store
  .select('app')
  //.pipe(map(e => e.counter));

  Increment()
  {
    this.store.dispatch(incrementCounter())
  }

  Decrement()
  {
    this.store.dispatch(decrementCounter())
  }

  ngOnInit(): void {
    this.counter$.subscribe(
    (e) => console.log(e)
    )
  }

}
