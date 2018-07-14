package com.sean.AutomateMyDinner.controller;

import com.sean.AutomateMyDinner.model.Meal;
import com.sean.AutomateMyDinner.service.MealService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MealController {

    private static final Logger LOGGER = LoggerFactory.getLogger(MealController.class);

    @Autowired
    private MealService mealService;

//    @CrossOrigin
    @RequestMapping(value = "/meals", method = RequestMethod.GET)
    public List<Meal> getMeals(){
        LOGGER.info("Retrieving list of meals from database...");
        return mealService.getMeals();
    }

    @RequestMapping(value = "/meals/add", method = RequestMethod.POST)
    public boolean addMeal(@RequestBody Meal meal){
        LOGGER.info("Adding meal to database: {}", meal);
        return mealService.addMeal(meal);
    }

    @RequestMapping(value = "/meals/update", method = RequestMethod.POST)
    public boolean updateMeal(@RequestBody Meal meal){
        LOGGER.info("Updating meal in database: {}", meal);
        return mealService.updateMeal(meal);
    }

    @RequestMapping(value = "/meals/delete", method = RequestMethod.POST)
    public boolean deleteMeal(@RequestBody int id){
        LOGGER.info("Deleting meal in database with id: {}", id);
        return mealService.deleteMeal(id);
    }

}
