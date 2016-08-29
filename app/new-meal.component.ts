import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
  <h2>Enter Type of Food</h2>
  <h3>Enter Name of Food</h3>
  <input placeholder="Name" class="input-lg"#newName>
  <h3>Enter Description of Food</h3>
  <input placeholder="Details" class="input-lg"#newDetails>
  <h3>Enter Total Amount of Calories:</h3>
  <input placeholder="Calories" class="input-lg"#newCalories>
  <button (click)="addMeal(newName, newDetails, newCalories)">Enter</button>
</div>
  `
})
  export class NewMealComponent {
    public onSubmitNewMeal: EventEmitter<Object>;
    constructor(){
      this.onSubmitNewMeal = new EventEmitter();
    }
  }
