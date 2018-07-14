import { Component, OnInit } from '@angular/core';
import {Meal} from '../model/meal';
import {MealsService} from '../meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  mealList: Meal[];
  selectedMeal: Meal;
  constructor(private mealservice: MealsService) { }

  ngOnInit() {
    this.getMealList();
  }

  getMealList(): void {
    this.mealservice.getMealList().subscribe(mealList => this.mealList = mealList);
  }
  onSelect(meal: Meal) {
    this.selectedMeal = meal;
  }
  deleteMeal(meal: Meal) {
    console.log('Deleting ' + meal.name);
    this.mealservice.deleteMeal(meal);
    this.getMealList();
  }

}
