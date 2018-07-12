package com.sean.AutomateMyDinner.service;

import com.sean.AutomateMyDinner.dao.EmailDao;
import com.sean.AutomateMyDinner.model.MealPlan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import java.util.Date;
import java.util.List;

public class EmailService {

    @Autowired
    EmailDao emailDao;

    @Autowired
    JavaMailSender javaMailSender;

    private static final Logger LOGGER = LoggerFactory.getLogger(EmailService.class);

    public boolean emailMealPlan(MealPlan mealPlan){
        List<String> recipients = getRecipients();
        if(recipients == null){
            LOGGER.info("No Recipients stored");
            return false;
        }
        LOGGER.info("Recipient list: {}", recipients);
        for(String recipient: recipients){
            try{
                send(recipient, mealPlan);
            }catch (Exception e) {
                LOGGER.error("Failed to send new meal plan to {}\n {}", recipient, e.getMessage());
            }

        }
        return true;
    }

    public List<String> getRecipients() {
        LOGGER.info("Retrieving email recipient list from database...");
        return emailDao.getRecipients();
    }

    private boolean send(String recipient, MealPlan mealPlan){
        LOGGER.info("Sending meal plan to: {}", recipient);
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(recipient);
        message.setSubject("New Meal Plan : " + new Date());
        System.out.println("New Meal Plan : " + new Date());
        message.setText(getEmailBody(mealPlan));
        javaMailSender.send(message);
        return true;
    }

    private String getEmailBody(MealPlan mealPlan) {
        //TODO
        return "test";
    }

    public boolean addRecipient(String recipient) {
        return emailDao.addRecipient(recipient);
    }

    public boolean deleteRecipient(String recipient) {
        return emailDao.deleteRecipient(recipient);
    }
}
