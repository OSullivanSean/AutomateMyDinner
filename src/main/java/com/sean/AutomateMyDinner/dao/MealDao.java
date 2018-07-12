package com.sean.AutomateMyDinner.dao;

import com.sean.AutomateMyDinner.model.Meal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class MealDao {

    @Autowired
    JdbcTemplate jdbcTemplate;

    private final String GET_MEALS = "SELECT * FROM MEALS";

    public List<Meal> getMeals(){
        return jdbcTemplate.query(GET_MEALS, new MealRowMapper());
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
