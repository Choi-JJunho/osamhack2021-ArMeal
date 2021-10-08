package com.api.controller;

import com.api.domain.DailyMeal;
import com.api.domain.Menu;
import com.api.mapper.MenuMapper;
import com.api.service.MenuService;
import java.sql.Timestamp;
import java.sql.Date;

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
public class IngredientController {
    @Autowired
    MenuService menuService;

    @RequestMapping(value = "/get/ingredient/info/{groupId}/all", method = RequestMethod.GET)
    public ResponseEntity getIngredientInfoAll (@PathVariable("groupId") long group_id) {
        return new ResponseEntity<List<HashMap<String, Object>>>(menuService.getIngredientInfoAll(group_id), HttpStatus.OK);
    }

    @RequestMapping(value = "/get/ingredient/info/{groupId}/{ingredientId}", method = RequestMethod.GET)
    public ResponseEntity getIngredientInfoId (@PathVariable("groupId") long group_id, @PathVariable("ingredientId") long ingredient_id) {
        return new ResponseEntity<HashMap<String, Object>>(menuService.getIngredientInfoId(ingredient_id, group_id), HttpStatus.OK);
    }

    // OK
    @RequestMapping(value = "/add/ingredient/{menuId}/{name}", method = RequestMethod.GET)
    public ResponseEntity addIngredient (@PathVariable("menuId") long id, @PathVariable("name") String name) {
        return new ResponseEntity<List<HashMap<String, Object>>>(menuService.addUsedIngredient(id, name), HttpStatus.OK);
    }
    
    @RequestMapping(value = "/get/ingredient/menu/{id}", method = RequestMethod.GET)
    public ResponseEntity getIngerdient (@PathVariable("id") long id) {
        return new ResponseEntity<List<HashMap<String, Object>>>(menuService.getIngredientsByMenuId(id), HttpStatus.OK);
    }

   

    /* nonUsed
    

    // OK
    @RequestMapping(value = "/get/ingredient/menu/{id}", method = RequestMethod.GET)
    public ResponseEntity getIngerdient (@PathVariable("id") long id) {
        return new ResponseEntity<List<HashMap<String, Object>>>(menuService.getIngredientsByMenuId(id), HttpStatus.OK);
    }
    */
}
