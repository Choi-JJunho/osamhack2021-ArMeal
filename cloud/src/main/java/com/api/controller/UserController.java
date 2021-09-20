package com.api.controller;

import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import com.api.service.UserService;
import com.api.domain.User;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @RequestMapping(value = "/login", method= RequestMethod.POST)
    public boolean login(@ApiParam(value = "아이디", required = true, example = "abcde") @RequestParam String id, @ApiParam(value = "비밀번호", required = true, example = "12345")String password) {
        return userService.login(id, password);
    }

    @RequestMapping(value = "/signup", method= RequestMethod.POST)
    public ResponseEntity signup(@ApiParam(value = "닉네임", required = true, example = "Nickname") String name,
    @ApiParam(value = "아이디", required = true) String loginId,
    @ApiParam(value = "비밀번호", required = true) String password,
    @ApiParam(value = "이메일", required = true) String email,
    @ApiParam(value = "부대코드", required = true) long groupId) {
        return new ResponseEntity<String>(userService.signup(name, password, email, groupId, loginId), HttpStatus.OK);
    }
}
