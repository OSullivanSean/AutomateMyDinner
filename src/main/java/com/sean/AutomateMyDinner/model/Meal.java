package com.sean.AutomateMyDinner.model;

import org.json.JSONObject;
import org.springframework.stereotype.Component;

public class Meal {

    private int id;
    private String name;
    private String recipe;
    private String ingredients;

    public Meal(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRecipe() {
        return recipe;
    }

    public void setRecipe(String recipe) {
        this.recipe = recipe;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    @Override
    public String toString(){
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("id", this.id);
        jsonObject.put("name", this.name);
        jsonObject.put("recipe", this.recipe);
        jsonObject.put("ingredients", this.ingredients);
        return jsonObject.toString();
    }
}
