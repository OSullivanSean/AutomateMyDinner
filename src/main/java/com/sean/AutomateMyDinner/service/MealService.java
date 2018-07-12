package com.sean.AutomateMyDinner.service;

import com.sean.AutomateMyDinner.dao.MealDao;
import com.sean.AutomateMyDinner.model.Meal;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

public class MealService {

    @Autowired
    MealDao mealDao;

    public List<Meal> getMeals() {
        List<Meal> mealList = mealDao.getMeals();
        return mealList;
    }

    public boolean addMeal(Meal meal) {
        return mealDao.addMeal(meal);
    }

    public boolean updateMeal(Meal meal) {
        return mealDao.updateMeal(meal);
    }

    public boolean deleteMeal(int id) {
        return mealDao.deleteMeal(id);
    }
}
