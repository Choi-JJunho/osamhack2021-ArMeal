package com.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import com.api.service.UserService;
import com.api.domain.User;

@RestController
public class UserController {
    @Autowired
    UserService userService;


    @RequestMapping(value = "/test", method= RequestMethod.GET) 
    public String getTime() {
        return userService.getTime();
    }

    @RequestMapping(value = "/getmenu", method= RequestMethod.GET)
    public List<User> getUsers() {
        return userService.selectAllUser();
    }
}
