package com.sean.AutomateMyDinner.model;

import java.util.Date;
import java.util.List;
import java.util.Map;

public class MealPlan {

    private Map<Date, Meal> mealList;
    private String ingredientsList;

    public MealPlan(){}

    public Map<Date, Meal> getMealList() {
        return mealList;
    }

    public void setMealList(Map<Date, Meal> mealList) {
        this.mealList = mealList;
    }

    public String getIngredientsList() {
        return ingredientsList;
    }

    public void setIngredientsList(String ingredientsList) {
        this.ingredientsList = ingredientsList;
    }
}
