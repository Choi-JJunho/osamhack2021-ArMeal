package com.api.controller;

import com.api.domain.Menu;
import com.api.service.MenuService;
import java.sql.Timestamp;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MenuController {
    @Autowired
    MenuService menuService;

    @RequestMapping(value = "/addmenu", method = RequestMethod.POST)
    public ResponseEntity addMenu(@RequestBody Menu menu) {
        return new ResponseEntity<HashMap<Object,Object>>(menuService.addMenu(menu.getName(), menu.getMenutype()),HttpStatus.OK);
    }

    @RequestMapping(value = "/getallmenu", method = RequestMethod.GET)
    public ResponseEntity getAllMenu() {
        return new ResponseEntity<List<HashMap<String, Object>>>(menuService.getAllMenu(), HttpStatus.OK);
    }
/*
    // TODO : setDailyMenu
    @RequestMapping(value = "/setdailymenu", method = RequestMethod.GET)
    public void setdailymenu(Timestamp time) {
        menuService.SetDailyMenu();
    }
    
    // TODO : setDailyMenu
    @RequestMapping(value = "/getdailymenu", method = RequestMethod.GET)
    public List<Menu> getdailymenu() {
        return menuService.getDailyMenu();
    }
*/
}
