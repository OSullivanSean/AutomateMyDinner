package com.sean.AutomateMyDinner.controller;

import com.sean.AutomateMyDinner.service.EmailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/email")
public class EmailController {

    private static final Logger LOGGER = LoggerFactory.getLogger(EmailController.class);

    @Autowired
    EmailService emailService;

    @RequestMapping(method = RequestMethod.GET)
    public List<String> getRecipients(){
        return emailService.getRecipients();
    }

    @RequestMapping(method = RequestMethod.POST)
    public boolean addRecipient(@RequestBody String recipient){
        LOGGER.info("Adding email recipient to database...");
        return emailService.addRecipient(recipient);
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public boolean deleteRecipient(@RequestBody String recipient){
        LOGGER.info("Deleting email recipient from database...");
        return emailService.deleteRecipient(recipient);
    }
}
