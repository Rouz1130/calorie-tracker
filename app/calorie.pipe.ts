import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform = function(input: Meal[]){
    var output: Meal[] = [];

    for (var i = 0; i < input.length; i++){
      var digits = parseInt(input[i].calories);
      if(digits <= 250 ){
        output.push(input[i]);
      }
    }
    return output;
  }

}
