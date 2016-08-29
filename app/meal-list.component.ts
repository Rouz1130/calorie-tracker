import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  template: `
  <div class="container">
  <h3 *ngFor="#currentMeal of mealList" (click)= "mealClicked(currentMeal)">{{currentMeal.name}}</h3>
  </div>
  `
})


export class MealListComponent {
  public mealList: Meal[];
  mealClicked(clickedMeal: Meal): void{
    console.log(clickedMeal);
  }
}
