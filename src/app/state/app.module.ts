import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoEffects } from '../feature/todos/state/todos.effects';
// import { REDUCERS_TOKEN, metaReducers } from './app.state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
})
export class StateModule {}
