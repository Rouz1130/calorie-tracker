import { Component } from 'angular2/core';
import {Meal} from './meal.model';
import {MealListComponent} from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Food Tracker</h1>
      <meal-list [mealList]= "meals"></meal-list>
    </div>
  `
  })
  export class AppComponent {
  public meal: Meal[];
  constructor(){
    this.meals = [
  new Meal("Tacos", "El Taco", "600"),
  new Meal("Big Mac", "Mcdonalds", "400"),
  new Meal("Pizza", "Big Slice", "300"),
  new Meal("Tuna", "Tuna house", "220")
  ];
}
 mealWasSelected(clickedMeal: Meal): void {
   console.log(clickedMeal);
 }

}
