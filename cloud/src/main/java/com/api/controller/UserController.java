package com.api.controller;

import com.api.domain.User;

import io.swagger.annotations.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.api.service.UserService;
import java.util.HashMap;


@RestController
public class UserController {
    @Autowired
    UserService userService;

    @RequestMapping(value = "/login", method= RequestMethod.POST)
    public ResponseEntity login(@ApiParam(value = "(required: login_id, password)", required = true) @RequestBody User user) {
        return new ResponseEntity<HashMap<Object,Object>>(userService.login(user.getLogin_id(), user.getPassword()),HttpStatus.OK);
    }
 
    @RequestMapping(value = "/signup2", method= RequestMethod.POST)
    public ResponseEntity signup2(@ApiParam(value = "(required: login_id, password, email, name, group_id)", required = true) @RequestBody User user) {
        System.out.println(user);
        return new ResponseEntity<HashMap<Object, Object>>(userService.signup(user.getName(), user.getPassword(), user.getEmail(), user.getGroup_id(), user.getLogin_id()), HttpStatus.OK);
    }

    /* Not JSON
    @RequestMapping(value = "/login", method= RequestMethod.POST)
    public ResponseEntity login(@RequestBody @ApiParam(value = "아이디", required = true, example = "abcde") String id, @ApiParam(value = "비밀번호", required = true, example = "12345") String password) {
        return new ResponseEntity<HashMap<Object,Object>>(userService.login(id, password),HttpStatus.OK);
    }

    @RequestMapping(value = "/signup", method= RequestMethod.POST)
    public ResponseEntity signup(@RequestBody @ApiParam(value = "닉네임", required = true, example = "Nickname") String name,
    @ApiParam(value = "아이디", required = true) String loginId,
    @ApiParam(value = "비밀번호", required = true) String password,
    @ApiParam(value = "이메일", required = true) String email,
    @ApiParam(value = "부대코드", required = true) long groupId) {
        return new ResponseEntity<HashMap<Object, Object>>(userService.signup(name, password, email, groupId, loginId), HttpStatus.OK);
    }
*/ 
}
