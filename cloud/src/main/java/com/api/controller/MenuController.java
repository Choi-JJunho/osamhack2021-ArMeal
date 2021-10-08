package com.api.controller;

import com.api.domain.DailyMeal;
import com.api.domain.Group;
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
public class MenuController {
    @Autowired
    MenuService menuService;

    @RequestMapping(value = "/get/menu/info/{groupId}/all", method = RequestMethod.GET)
    public ResponseEntity getAllMenu (@PathVariable("groupId") long group_id) {
        return new ResponseEntity<List<HashMap<String, Object>>>(menuService.getMenuInfoAll(group_id), HttpStatus.OK);
    }

    @RequestMapping(value = "/get/menu/info/{groupId}/{menuId}", method = RequestMethod.GET)
    public ResponseEntity getMenu (@PathVariable("groupId") long group_id, @PathVariable("menuId") long menu_id) {
        return new ResponseEntity<List<HashMap<String, Object>>>(menuService.getMenuInfoId(group_id, menu_id), HttpStatus.OK);
    }
    
    @RequestMapping(value = "/get/dailymenu/info/{groupId}/{startDate}/{endDate}", method = RequestMethod.GET)
    public ResponseEntity getDailyMenuInfoByDates (@PathVariable("groupId") long group_id, @PathVariable("startDate") Date start, @PathVariable("endDate") Date end) {
        return new ResponseEntity<List<HashMap<String, Object>>>(menuService.getDailyMenuInfoByDates(group_id, start, end), HttpStatus.OK);
    }

    
    /* Legacy
    - 자율메뉴 추가를 위한 addmenu => 자율메뉴 추가와 중복
    @RequestMapping(value = "/add/menu", method = RequestMethod.POST)
    public ResponseEntity addMenu(String name, int type, long group_id) {
        return new ResponseEntity<HashMap<Object,Object>>(menuService.addMenu(name, type, group_id),HttpStatus.OK);
    }

    - searchMenu와 중복
    @RequestMapping(value = "/get/menu/{name}", method = RequestMethod.GET)
    public ResponseEntity getMenu(String name, long groupId) {
        return new ResponseEntity<Menu>(menuService.getMenu(name, groupId), HttpStatus.OK);
    }

    === nonUsed ===
    @RequestMapping(value = "/updmenutype", method = RequestMethod.POST)
    public ResponseEntity updateMenuType(@RequestBody Menu menu) {
        return new ResponseEntity<HashMap<Object,Object>>(menuService.updateMenuType(menu.getName(), menu.getMenutype()),HttpStatus.OK);
    }

    @RequestMapping(value = "/updatemenuscore", method = RequestMethod.POST)
    public ResponseEntity updateMenuScore(@RequestBody Menu menu) {
        return new ResponseEntity<HashMap<Object,Object>>(menuService.updateMenuScore(menu.getName(), menu.getScore()),HttpStatus.OK);
    }


    // 해당 메뉴의 Type (메인, 자율, 후식)을 변경한다.
    // OK
    @RequestMapping(value = "/edit/menu/{name}/{type}", method = RequestMethod.POST)
    public ResponseEntity editMenu(String name, int type, long group_id) {
        return new ResponseEntity<HashMap<Object,Object>>(menuService.editMenu(name, type, group_id),HttpStatus.OK);
    }

    // 해당 부대의 메뉴를 모두 구한다.
    // created_at 값이 milliseconds로 변환되어 반환됨.
    // OK
    @RequestMapping(value = "/get/menu/{groupId}", method = RequestMethod.GET)
    public ResponseEntity getAllMenu(@PathVariable("groupId") long group_id) {
        return new ResponseEntity<List<HashMap<String,Object>>>(menuService.getAllMenu(group_id), HttpStatus.OK);
    }

    // 해당 부대에서 해당하는 이름이 포함된 메뉴를 모두 검색한다.
    // OK
    @RequestMapping(value = "/search/menu/{name}", method = RequestMethod.GET)
    public ResponseEntity searchMenu(String name, long group_id) {
        return new ResponseEntity<List<HashMap<String,Object>>>(menuService.searchMenu(name, group_id), HttpStatus.OK);
    }

    // 해당 메뉴가 나온 날짜를 구한다.
    // OK
    @RequestMapping(value = "/get/date/menu/{id}", method = RequestMethod.GET)
    public ResponseEntity getRecentDate (@PathVariable("id") long id, long group_id) {
        return new ResponseEntity<HashMap<String, Object>>(menuService.getRecentDate(id, group_id), HttpStatus.OK);
    }
   
    
    // ingredientId를 여러개 받을 수 있도록 해야한다.
    /*
    @RequestMapping(value = "/add/selfdish/{name}/{date}/{groupId}/{ingredientId}", method = RequestMethod.POST)
    public ResponseEntity addSelfDish (@PathVariable("name") String name, @PathVariable("date") Date date, @PathVariable("groupId") long ingredientId, @PathVariable("ingredientId") long group_id) {
        return new ResponseEntity<HashMap<String, Object>>(menuService.addSelfDish(name, date, ingredientId, group_id), HttpStatus.OK);
    }
    
    
    - 자율메뉴 추가를 위한 addmenu => 자율메뉴 추가와 중복
    @RequestMapping(value = "/add/dailymenu", method = RequestMethod.POST)
        public ResponseEntity adddailyMenu(@RequestBody DailyMeal menu) {
        return new ResponseEntity<HashMap<String, Object>>(menuService.addDailyMenu(menu),HttpStatus.OK);
    }

    === nonUsed ===
    // OK
    @RequestMapping(value = "/get/dailymenu/month", method = RequestMethod.GET)
    public ResponseEntity getDailyMenu (long group_id, int time, String year, String month) {
        return new ResponseEntity<List<HashMap<String, Object>>>(menuService.getDailyMenu(group_id, year, month, time), HttpStatus.OK);
    }
    
    
*/

}
