import { Component, EventEmitter } from 'angular2/core';
import {Meal} from './meal.model';
import {MealListComponent} from './meal-list.component';
import { MealComponent} from './meal.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Calorie Tracker!</h1>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
  })
  export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
  new Meal("Tacos", "El Taco", "600"),
  new Meal("Big Mac", "Mcdonalds", "400"),
  new Meal("Pizza", "Big Slice", "300"),
  new Meal("Tuna", "Tuna house", "220")
  ];
}
mealWasSelected(clickedMeal: Meal): void {
  console.log("main",clickedMeal);
}

}
