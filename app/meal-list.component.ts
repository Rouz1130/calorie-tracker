import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent} from './meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import {NewMealComponent} from './new-meal.component';
import { CaloriePipe } from './calorie.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList','onSubmitNewMeal'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  pipes: [CaloriePipe],
  template: `
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    <h3>Your Meals</h3>

    <select (change)="onChange($event.target.value)" class="filter">
   <option value="all" selected="selected">Show All</option>
   <option value="lowCalorie">Low Calorie</option>
   <option value="highCalorie" >High Calorie</option>
 </select>
  <br>
  <br>
   <h3><p>Edit Food Details:</p></h3>
   <meal-display *ngFor="#currentMeal of mealList | calories:selectedCompleteness"
  (click)= "mealClicked(currentMeal)" [class.selected]="currentMeal === selectedMeal"[meal]="currentMeal"></meal-display>
   <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal-details>
   `
  })


export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedCompleteness: string = "all";
  public selectedMeal: Meal;
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void{
    console.log("kiddo",clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  onChange(optionFromMenu){
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }

  createMeal(meal): void {
    this.mealList.push(
      new Meal(meal.userName, meal.userDetails, meal.userCalories)
    )
  }
}
