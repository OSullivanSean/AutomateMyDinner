package com.sean.AutomateMyDinner.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class EmailDao {

    @Autowired
    JdbcTemplate jdbcTemplate;

    private static final String GET_RECIPIENTS = "SELECT * FROM RECIPIENTS";
    private static final String ADD_RECIPIENT = "INSERT INTO RECIPIENT VALUES(?)";
    private static final String DELETE_RECIPIENT = "DELETE FROM RECIPIENTS WHERE EMAIL = ?";

    public List<String> getRecipients() {
        return jdbcTemplate.queryForList(GET_RECIPIENTS, String.class);
    }

    public boolean addRecipient(String recipient) {
        jdbcTemplate.update(ADD_RECIPIENT, recipient);
        return true;
    }

    public boolean deleteRecipient(String recipient){
        jdbcTemplate.update(DELETE_RECIPIENT, recipient);
        return true;
    }
}
