import { Component, EventEmitter } from 'angular2/core';


@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-form">
      <h3>Edit Name: </h3>
      <input [(ngModel)]="meal.name" class="col-sm-8 input-lg meal-form"/>
    </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}