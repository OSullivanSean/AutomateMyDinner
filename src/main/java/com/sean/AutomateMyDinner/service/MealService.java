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
}
