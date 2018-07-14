import { Component, OnInit } from '@angular/core';
import {Meal} from '../model/meal';
import {MealsService} from '../meals.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addmeal',
  templateUrl: './addmeal.component.html',
  styleUrls: ['./addmeal.component.css']
})
export class AddmealComponent implements OnInit {
  meal: Meal;
  constructor(private mealservice: MealsService, private router: Router) { }

  ngOnInit() {
    this.meal = new Meal();
    this.meal.id = null;
    this.meal.name = '';
    this.meal.ingredients = '';
  }
  addMeal() {
    this.mealservice.addMeal(this.meal);
    this.router.navigateByUrl('meals');
  }

}
