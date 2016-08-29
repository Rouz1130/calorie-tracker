import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
  <br>
  <h4>Name of Meal:</h4>
  <input placeholder="Name" class="input-lg"#newName>
  <h4>Description of Meal:</h4>
  <input placeholder="Details" class="input-lg"#newDetails>
  <h4>Total Calories:</h4>
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
    addMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement){
   this.onSubmitNewMeal.emit({userName: userName.value, userDetails: userDetails.value, userCalories: userCalories.value});
   userName.value = "";
   userDetails.value = "";
   userCalories.value = "";
  }
}
