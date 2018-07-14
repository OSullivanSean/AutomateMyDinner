package com.sean.AutomateMyDinner.model;

import java.util.Date;

public class Day {

    private Date date;
    private Meal meal;

    public Day(){}

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Meal getMeal() {
        return meal;
    }

    public void setMeal(Meal meal) {
        this.meal = meal;
    }
}
