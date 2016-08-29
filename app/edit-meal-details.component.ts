import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-form">
  <h4>Change Meal</h4>
  <input [(ngModel)]="meal.name"/>
  <h4>Change description</h4>
  <input [(ngModel)]="meal.details"/>
  <h4>Adjust Calories Count</h4>
  <input [(ngModel)]="meal.calories"/>
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
