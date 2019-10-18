import { createSelector } from "@ngrx/store";

export interface State {
  val: number;
  datos: string;
  name: string;
}

export interface AppState {
  feature: State;
}

export const selectAppState = (appState: AppState) => appState.feature;

export const selectorVal = createSelector(
  selectAppState,
  (state: State) => state
);
