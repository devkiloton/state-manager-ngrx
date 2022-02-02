import { createAction, createReducer, on } from "@ngrx/store"

export interface ICounterState{
  counter: number;
}

export const counterInitialState: ICounterState = {
  counter: 0
}

// ACTIONS
export const incrementCounter = createAction('[Counter] Increase counter');
export const decrementCounter = createAction('[Counter] Decrease counter');

// REDUCER - capture/handle the actions
export const counterReducer = createReducer(
  counterInitialState,
  on(incrementCounter, (state) => {
    state = {
      ...state,
      counter: state.counter + 1
    }
    return state;
  }),
  on(decrementCounter, (state) => {
    state = {
      ...state,
      counter: state.counter - 1
    }
    return state;
  })
)
