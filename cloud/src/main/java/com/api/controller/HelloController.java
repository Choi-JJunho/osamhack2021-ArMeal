package com.api.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
public class HelloController {
    @RequestMapping(value="/hello", method=RequestMethod.GET)
    public @ResponseBody String hello() {
        return "Hello World";
    }
}
