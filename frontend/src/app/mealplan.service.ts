import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MealPlan} from './model/mealplan';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealplanService {
  private mealPlanUrl = 'http://localhost:8089/plan';
  constructor(private http: HttpClient) { }

  getMealPlan(): Observable<MealPlan> {
    return this.http.get<MealPlan>(this.mealPlanUrl + '/current');
  }

  generateNewMealPlan(): Observable<MealPlan> {
    return this.http.get<MealPlan>(this.mealPlanUrl + '/new');
  }
}
