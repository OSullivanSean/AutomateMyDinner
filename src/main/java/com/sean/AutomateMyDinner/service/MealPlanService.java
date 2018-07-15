package com.sean.AutomateMyDinner.service;

import com.sean.AutomateMyDinner.dao.MealDao;
import com.sean.AutomateMyDinner.model.Day;
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
        try {
            setDayList();
        }catch (Exception e){
            LOGGER.info("Failed to create new meal plan: " + e.getMessage());
        }
        setIngredientsList();

        return true;
    }

    private boolean setDayList() throws Exception{
        List<Day> dayList = new ArrayList<>();

        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());

        List<Meal> mealList = mealDao.getMeals();
        if(mealList.size() < 7){
            throw new Exception("Less than 7 meals currently saved in database");
        }

        for(int i = 0; i < 7; i++){
            Day day = new Day();
            calendar.add(Calendar.DATE, 1);
            day.setDate(calendar.getTime());
            Collections.shuffle(mealList);
            day.setMeal(mealList.get(0));
            mealList.remove(0);
            dayList.add(day);
        }
        currentMealPlan.setDayList(dayList);
        return true;
    }

    private boolean setIngredientsList() {
        LOGGER.info("Creating ingredients list...");
        //TODO refactor to remove duplicates and beautify
        String ingredientsListString = "";
        List<String> ingredientsList = new ArrayList<>();
        for(Day day: currentMealPlan.getDayList()){
            ingredientsListString += "," + day.getMeal().getIngredients();
        }
        for(String ingredient: ingredientsListString.split(",")){
            ingredientsList.add(ingredient.trim());
        }
        Collections.sort(ingredientsList);
        currentMealPlan.setIngredientsList(ingredientsList);
        LOGGER.info("Ingredients list: {}", ingredientsList);
        return true;
    }



}
