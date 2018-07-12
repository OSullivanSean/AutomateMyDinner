package com.sean.AutomateMyDinner;

import com.sean.AutomateMyDinner.dao.MealDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AutomateMyDinnerApplication {

	public static void main(String[] args) {
		SpringApplication.run(AutomateMyDinnerApplication.class, args);
	}
}
