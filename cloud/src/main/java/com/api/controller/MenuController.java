package com.api.controller;

import com.api.domain.User;
import com.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
public class MenuController {
    @Autowired
    MenuService menuService;

    @RequestMapping(value = "/setdailymenu", method= RequestMethod.POST)
    public ResponseEntity setdailymenu(@ApiParam(value = "날짜(String)", required = true) String date_value,
    @ApiParam(value = "시간(Integer)", required = true) int time,
    @ApiParam(value = "부대코드(Integer)", required = true) long groupId,
    @ApiParam(value = "메뉴(Integer)", required = true) long menu) {
        return new ResponseEntity<String>(userService.signup(date_value, time, groupId, menu), HttpStatus.OK);
    }
}