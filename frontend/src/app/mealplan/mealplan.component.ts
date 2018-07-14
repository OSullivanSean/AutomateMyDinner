import { Component, OnInit } from '@angular/core';
import {Meal} from '../model/meal';
import {MealplanService} from '../mealplan.service';
import {MealPlan} from '../model/mealplan';
import {Day} from '../model/day';

@Component({
  selector: 'app-mealplan',
  templateUrl: './mealplan.component.html',
  styleUrls: ['./mealplan.component.css']
})
export class MealplanComponent implements OnInit {
  mealPlan: MealPlan;
  selectedMeal: Meal;
  constructor(private mealplanService: MealplanService) { }

  ngOnInit() {
    this.getMealPlan();
  }
  getMealPlan() {
    this.mealplanService.getMealPlan().subscribe(mealPlan => this.mealPlan = mealPlan);
  }
  generateNewMealPlan() {
    this.mealplanService.generateNewMealPlan().subscribe(mealPlan => this.mealPlan = mealPlan);
  }
  onSelect(day: Day) {
    this.selectedMeal = day.meal;
  }
}
