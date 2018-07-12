package com.sean.AutomateMyDinner.service;

import com.sean.AutomateMyDinner.dao.MealDao;
import com.sean.AutomateMyDinner.model.Meal;
import com.sean.AutomateMyDinner.model.MealPlan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;


import java.util.*;

public class MealPlanService {

    private static final Logger LOGGER = LoggerFactory.getLogger(MealPlanService.class);


    private MealPlan currentMealPlan;

    @Autowired
    MealDao mealDao;

    @Autowired
    EmailService emailService;

    public MealPlan getCurrentMealPlan() {
        if(currentMealPlan == null){
            LOGGER.info("No current meal plan available...");
            createNewMealPlan();
        }

        return currentMealPlan;
    }

    public MealPlan getNewMealPlan() {
        createNewMealPlan();
        emailService.emailMealPlan(currentMealPlan);

        return currentMealPlan;
    }

    private boolean createNewMealPlan() {
        LOGGER.info("Creating new meal plan...");
        currentMealPlan = new MealPlan();
        setMealList();
        setIngredientsList();

        return true;
    }

    private boolean setMealList() {
        List<Meal> mealList = mealDao.getMeals();
        currentMealPlan.setMealList(pickMealsForWeek(mealList));

        return true;
    }

    private boolean setIngredientsList() {
        LOGGER.info("Creating ingredients list...");
        //TODO refactor to remove duplicates
        String ingredientsList = "";
        for(Meal meal: currentMealPlan.getMealList().values()){
            ingredientsList += meal.getIngredients();
        }
        currentMealPlan.setIngredientsList(ingredientsList);
        LOGGER.info("Ingredients list: {}", ingredientsList);
        return true;
    }

    private Map<Date,Meal> pickMealsForWeek(List<Meal> mealList) {
        LOGGER.info("Selecting meals for the next 7 days...");
        Map<Date, Meal> plannedMeals = new TreeMap<>();

        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());

        for(int i = 0; i < 7; i++){
            Collections.shuffle(mealList);
            calendar.add(Calendar.DATE, 1);
            plannedMeals.put(calendar.getTime(), mealList.get(0));
        }
        LOGGER.info("Planned meals: {}", plannedMeals);
        return plannedMeals;
    }

}
