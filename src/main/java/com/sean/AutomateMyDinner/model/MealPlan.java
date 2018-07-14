package com.sean.AutomateMyDinner.model;

import java.util.List;

public class MealPlan {


    private List<Day> dayList;
    private List<String> ingredientsList;

    public MealPlan() {
    }

    public List<Day> getDayList() {
        return dayList;
    }

    public void setDayList(List<Day> dayList) {
        this.dayList = dayList;
    }

    public List<String> getIngredientsList() {
        return ingredientsList;
    }

    public void setIngredientsList(List<String> ingredientsList) {
        this.ingredientsList = ingredientsList;
    }
}
