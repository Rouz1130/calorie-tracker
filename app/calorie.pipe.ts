import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './meal.model';


@Pipe({
  name: "calories",
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform = function(input: Meal[]){
    var output: Meal[] = [];  
}
