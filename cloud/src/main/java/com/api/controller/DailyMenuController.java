package com.api.controller;

import com.api.domain.DailyMeal;
import com.api.domain.Menu;
import com.api.mapper.MenuMapper;
import com.api.service.MenuService;
import java.sql.Date;

import java.util.List;
import java.util.HashMap;

import io.swagger.annotations.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class DailyMenuController {
    @Autowired
    MenuService menuService;


    // OK
    @RequestMapping(value = "/get/dailymenu/month", method = RequestMethod.GET)
    public ResponseEntity getDailyMenu (long group_id, int time, String year, String month) {
        return new ResponseEntity<List<HashMap<String, Object>>>(menuService.getDailyMenu(group_id, year, month, time), HttpStatus.OK);
    }

    // OK
    @RequestMapping(value = "/add/selfdish", method = RequestMethod.POST)
    public ResponseEntity addSelfDish (String name, Date date, long ingredientId, long group_id) {
        return new ResponseEntity<HashMap<String, Object>>(menuService.addSelfDish(name, date, ingredientId, group_id), HttpStatus.OK);
    }
    
    /* Legacy
    - 자율메뉴 추가를 위한 addmenu => 자율메뉴 추가와 중복
    @RequestMapping(value = "/add/dailymenu", method = RequestMethod.POST)
        public ResponseEntity adddailyMenu(@RequestBody DailyMeal menu) {
        return new ResponseEntity<HashMap<String, Object>>(menuService.addDailyMenu(menu),HttpStatus.OK);
    }
    */
}
