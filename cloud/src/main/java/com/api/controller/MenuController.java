package com.api.controller;

import com.api.domain.Menu;
import com.api.service.MenuService;
import java.sql.Timestamp;

import java.util.List;
import java.util.Map;
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
public class MenuController {
    @Autowired
    MenuService menuService;

    
/*
    @RequestMapping(value = "/updmenutype", method = RequestMethod.POST)
    public ResponseEntity updateMenuType(@RequestBody Menu menu) {
        return new ResponseEntity<HashMap<Object,Object>>(menuService.updateMenuType(menu.getName(), menu.getMenutype()),HttpStatus.OK);
    }

    @RequestMapping(value = "/updatemenuscore", method = RequestMethod.POST)
    public ResponseEntity updateMenuScore(@RequestBody Menu menu) {
        return new ResponseEntity<HashMap<Object,Object>>(menuService.updateMenuScore(menu.getName(), menu.getScore()),HttpStatus.OK);
    }
*/
    // 자율메뉴 추가를 위한 addmenu
    @RequestMapping(value = "/add/menu", method = RequestMethod.POST)
    public ResponseEntity addMenu(@RequestBody Menu menu) {
        return new ResponseEntity<HashMap<Object,Object>>(menuService.addMenu(menu.getName(), menu.getMenutype()),HttpStatus.OK);
    }

}
