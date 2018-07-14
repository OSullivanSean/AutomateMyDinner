import {Component, Input, OnInit} from '@angular/core';
import {Meal} from '../model/meal';
import {MealsService} from '../meals.service';

@Component({
  selector: 'app-mealdetails',
  templateUrl: './mealdetails.component.html',
  styleUrls: ['./mealdetails.component.css']
})
export class MealdetailsComponent implements OnInit {
  @Input() meal: Meal;
  constructor(private mealService: MealsService) { }

  ngOnInit() {
  }

}
