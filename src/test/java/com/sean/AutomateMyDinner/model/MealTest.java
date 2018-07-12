package com.sean.AutomateMyDinner.model;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class MealTest {

    private Meal meal;

    @Before
    public void setup(){
        meal = new Meal();
    }

    @Test
    public void testId() {
        int expected = 100;
        meal.setId(expected);
        assertEquals(expected, meal.getId());
    }

    @Test
    public void testName() {
        String expected = "name";
        meal.setName(expected);
        assertTrue(expected.equals(meal.getName()));
    }

    @Test
    public void testRecipe() {
        String expected = "recipe";
        meal.setRecipe(expected);
        assertTrue(expected.equals(meal.getRecipe()));
    }

    @Test
    public void testIngredients() {
        String expected = "ingr1, ingr2";
        meal.setIngredients(expected);
        assertEquals(expected, meal.getIngredients());
    }

    @Test
    public void testToString() {
        meal.setId(1);
        meal.setName("Lasagne");
        meal.setRecipe("cook the food");
        meal.setIngredients("pasta sheet,tomato sauce");
        System.out.println(meal.toString());
    }
}