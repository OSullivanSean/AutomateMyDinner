package com.sean.AutomateMyDinner.config;

import com.sean.AutomateMyDinner.service.MealService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:service.properties")
public class ServiceConfig {

    @Bean
    public MealService mealService(){
        return new MealService();
    }
}
