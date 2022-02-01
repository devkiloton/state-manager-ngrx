import { createReducer } from "@ngrx/store"

export interface IAppState{
    counter: number;
}

export const appInitialState: IAppState = {
    counter: 0
}

export const appReducer = createReducer(
    appInitialState
)