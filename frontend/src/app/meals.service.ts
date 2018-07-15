import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Meal} from './model/meal';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  private mealsUrl = '/meals';
  constructor(private http: HttpClient) { }

  getMealList(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.mealsUrl);
  }

  deleteMeal(meal: Meal) {
    this.http.post( this.mealsUrl + '/delete', meal.id).subscribe();
  }

  addMeal(meal: Meal) {
    this.http.post(this.mealsUrl + '/add', meal).subscribe();
  }
}
