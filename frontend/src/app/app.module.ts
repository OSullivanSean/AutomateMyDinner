import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MealplanComponent } from './mealplan/mealplan.component';
import { MealsComponent } from './meals/meals.component';
import { AddmealComponent } from './addmeal/addmeal.component';
import { MealdetailsComponent } from './mealdetails/mealdetails.component';
import { ConfigurationComponent } from './configuration/configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    MealplanComponent,
    MealsComponent,
    AddmealComponent,
    MealdetailsComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/mealplan', pathMatch: 'full' },
      {path: 'mealplan', component: MealplanComponent},
      {path: 'meals', component: MealsComponent},
      {path: 'mealdetails', component: MealdetailsComponent},
      {path: 'addmeal', component: AddmealComponent},
      {path: 'config', component: ConfigurationComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
