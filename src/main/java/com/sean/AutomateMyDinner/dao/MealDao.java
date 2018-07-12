package com.sean.AutomateMyDinner.dao;

import com.sean.AutomateMyDinner.model.Meal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class MealDao {

    @Autowired
    JdbcTemplate jdbcTemplate;

    private final String GET_MEALS = "SELECT * FROM MEALS";
    private final String ADD_MEAL = "INSERT INTO MEALS VALUES(?, ?, ?, ?)";
    private final String UPDATE_MEAL = "UPDATE MEALS SET NAME = ?, RECIPE = ?, INGREDIENTS = ? WHERE ID = ?";
    private final String DELETE_MEAL = "DELETE FROM MEALS WHERE ID = ?";

    public List<Meal> getMeals(){
        return jdbcTemplate.query(GET_MEALS, new MealRowMapper());
    }

    public boolean addMeal(Meal meal) {
        jdbcTemplate.update(ADD_MEAL, meal.getId(), meal.getName(), meal.getRecipe(), meal.getIngredients());
        return true;
    }

    public boolean updateMeal(Meal meal) {
        jdbcTemplate.update(UPDATE_MEAL, meal.getName(), meal.getRecipe(), meal.getIngredients(), meal.getId());
        return true;
    }

    public boolean deleteMeal(int id) {
        jdbcTemplate.update(DELETE_MEAL, id);
        return true;
    }


    private static class MealRowMapper implements RowMapper<Meal>{

        @Override
        public Meal mapRow(ResultSet resultSet, int i) throws SQLException {
            Meal meal = new Meal();
            meal.setId(resultSet.getInt("ID"));
            meal.setName(resultSet.getString("NAME"));
            meal.setRecipe(resultSet.getString("RECIPE"));
            meal.setIngredients(resultSet.getString("INGREDIENTS"));
            return meal;
        }
    }

}
