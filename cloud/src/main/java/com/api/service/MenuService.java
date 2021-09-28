package com.api.service;

import java.sql.Date;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.api.domain.Menu;
import com.api.mapper.MenuMapper;
import com.api.mapper.RatingMapper;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class MenuService extends Exception {
    @Autowired
    MenuMapper menuMapper;

    @Autowired
    RatingMapper ratingMapper;

    public HashMap<Object,Object> addMenu(String name, int menutype) {
        HashMap<Object,Object> result = new HashMap<>();
        Menu menu = menuMapper.findMenuByName(name);

        if(menu != null) {
            result.put("message", "동일한 메뉴가 존재합니다.");
        } else {
            menuMapper.addMenu(name, menutype);
            result.put("message", "메뉴 \"" + name + "\"가 추가되었습니다.");
        }
        
        return result;
    }

    public HashMap<Object,Object> updateMenuType(String name, int menutype) {
        HashMap<Object,Object> result = new HashMap<>();
        Menu menu = menuMapper.findMenuByName(name);

        if(menu == null) {
            result.put("message", "존재하지 않는 메뉴입니다.");
        } else {
            menuMapper.updateMenuType(name, menutype);
            switch(menutype) {
                case 1:
                    result.put("message", "메뉴 \"" + name + "\"가 조식으로 설정되었습니다.");
                    break;
                case 2:
                    result.put("message", "메뉴 \"" + name + "\"가 중식으로 설정되었습니다.");
                    break;
                case 3:
                    result.put("message", "메뉴 \"" + name + "\"가 석식으로 설정되었습니다.");
                    break;
                case 4:
                    result.put("message", "메뉴 \"" + name + "\"가 브런치로 설정되었습니다.");
                    break;
            }
        }

        return result;
    }

    public HashMap<Object,Object> updateAllMenuScore() {
        HashMap<Object,Object> result = new HashMap<>();
        ratingMapper.calcSumOfRating_data();

        result.put("message", "점수가 집계되었습니다.");

        return result;
    }

    public List<HashMap<String, Object>> getAllMenu() {
        List<HashMap<String, Object>> result = new ArrayList<HashMap<String,Object>>();

        if(menuMapper.findAllMenu() == null) {
            HashMap<String,Object> res = new HashMap<>();
            res.put("message", "메뉴가 존재하지 않습니다.");
            result.add(res);
        } else {
            result = menuMapper.findAllMenu();
        }

        return result;
    }

    // 일일 메뉴를 설정한다.
    // time 1 : 조식 / 2 : 중식 / 3 : 석식
    public void addDailyMenu(Date date, int time, int groupId, int menuId){
        menuMapper.addDailyMenu(date, time, groupId, menuId);
    }

    // 일일 메뉴를 수정한다.
    public void updateDailyMenu(Date date, int time, int groupId, int menuId){
        menuMapper.updateDailyMenu(date, time, groupId, menuId);
    }

    // TODO: getAllDailyMenu
    // 일일 메뉴를 가져온다.
    /*
    public // getAllDailyMenu(){
        
    }*/

    public List<HashMap<String, Object>> getRecentDates(String menuName) {
        long idx = menuMapper.findMenuByName(menuName).getId();
        System.out.println(menuMapper.findRecentDateByMenuId(idx));
        return menuMapper.findRecentDateByMenuId(idx);
    }

}