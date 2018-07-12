package com.sean.AutomateMyDinner.controller;

import com.sean.AutomateMyDinner.model.MealPlan;
import com.sean.AutomateMyDinner.service.MealPlanService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/plan")
public class MealPlanController {

    private static final Logger LOGGER = LoggerFactory.getLogger(MealPlanController.class);

    @Autowired
    MealPlanService mealPlanService;

    @RequestMapping(value = "/current", method = RequestMethod.GET)
    public MealPlan getCurrentMealPlan(){
        LOGGER.info("Retrieving current meal plan...");
        return mealPlanService.getCurrentMealPlan();
    }

    @RequestMapping(value = "/new", method = RequestMethod.GET)
    public MealPlan getNewMealPlan(){
        LOGGER.info("Retrieving new meal plan...");
        return mealPlanService.getNewMealPlan();
    }
}
