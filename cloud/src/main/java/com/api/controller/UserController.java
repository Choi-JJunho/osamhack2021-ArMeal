package com.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.api.service.UserService;
import com.api.domain.User;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @RequestMapping(value = "/login", method= RequestMethod.POST)
    public boolean login(String id, String password) {
        return userService.login(id, password);
    }

    @RequestMapping(value = "/signup", method= RequestMethod.POST)
    public void signup(String name, String password, String email, long groupId, String userId) {
        userService.signup(name, password, email, groupId, userId);
    }


}
