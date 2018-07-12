package com.sean.AutomateMyDinner.controller;

import com.sean.AutomateMyDinner.dao.MealDao;
import com.sean.AutomateMyDinner.model.Meal;
import com.sun.deploy.net.HttpResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController(value = "meals")
public class MealController {

    @Autowired
    private MealDao mealDao;

    @RequestMapping(method = RequestMethod.GET)
    public List<Meal> getMeals(){
        return mealDao.getMeals();
    }

}
