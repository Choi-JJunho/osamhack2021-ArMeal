package com.api.service;

import java.sql.Date;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.api.domain.DailyMeal;
import com.api.domain.Ingredient;
import com.api.domain.Menu;
import com.api.domain.SelfDish;
import com.api.mapper.MenuMapper;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class MenuService extends Exception {
    @Autowired
    MenuMapper menuMapper;

    public HashMap<Object,Object> addMenu(String name, int type, long groupId) {
        HashMap<Object,Object> result = new HashMap<>();
        Menu menu = menuMapper.findMenuByName(name, groupId);

        if(menu != null) {
            result.put("error", "동일한 메뉴가 존재합니다.");
        } else {
            menuMapper.addMenu(name, type, groupId);
            switch(type) {
                case 1:
                    result.put("message", "메뉴 \"" + name + "\"가 메인 메뉴로 추가되었습니다.");
                    break;
                case 2:
                    result.put("message", "메뉴 \"" + name + "\"가 자율 메뉴로 추가되었습니다.");
                    break;
                case 3:
                    result.put("message", "메뉴 \"" + name + "\"가 후식으로 추가되었습니다.");
                    break;
            }
        }
        
        return result;
    }

    // 메뉴의 타입을 수정
    public HashMap<Object,Object> editMenu(String name, int type, long group_id) {
        HashMap<Object,Object> result = new HashMap<>();
        Menu menu = menuMapper.findMenuByName(name, group_id);

        if(menu == null) {
            result.put("error", "존재하지 않는 메뉴입니다.");
        } else {
            menuMapper.updateMenuType(name, type, group_id);
            switch(type) {
                case 1:
                    result.put("message", "메뉴 \"" + name + "\"가 메인 메뉴로 수정되었습니다.");
                    break;
                case 2:
                    result.put("message", "메뉴 \"" + name + "\"가 자율 메뉴로 수정되었습니다.");
                    break;
                case 3:
                    result.put("message", "메뉴 \"" + name + "\"가 후식으로 수정되었습니다.");
                    break;
            }
        }

        return result;
    }

    public void updateMenuScore(int id, long group_id) {
        menuMapper.updateMenuScore(id, group_id);
    }

    public List<HashMap<String, Object>> getAllMenu(long group_id) {
        return menuMapper.findAllMenu(group_id);
    }

    public Menu getMenu(long id, long groupId) {
        return menuMapper.findMenuById(id, groupId);
    }

    public List<HashMap<String, Object>> searchMenu(String name, long group_id) {
        return menuMapper.searchMenu(name, group_id);
    }

    // 일일 메뉴를 설정한다.
    // time 1 : 조식 / 2 : 중식 / 3 : 석식
    public HashMap<String, Object> addDailyMenu(DailyMeal menu){
        HashMap<String, Object> result = new HashMap<>();
        Menu flag = menuMapper.findMenuById(menu.getMenu(), menu.getGroup_id());

        if(flag != null) {
            result.put("error", "동일한 메뉴가 존재합니다.");
        } else {
            menuMapper.addDailyMenu(menu.getDate(), menu.getTime(), menu.getGroup_id(), menu.getMenu());
            result.put("message", "추가되었습니다.");
        }
        return result;
    }

    // 일일 메뉴를 수정한다.
    public void updateDailyMenu(DailyMeal menu){
        menuMapper.updateDailyMenu(menu.getDate(), menu.getTime(), menu.getGroup_id(), menu.getMenu());
    }

    // 한달치 메뉴를 가져온다.
    public List<HashMap<String, Object>> getDailyMenu(long groupNum, String year, String month, int time) {
        String start = year+"-"+month+"-"+"01";
        Date date = Date.valueOf(start);
        return menuMapper.findMonthMenu(groupNum, date, time);
    }

    public List<HashMap<String, Object>> getRecentDates(long menuId, long group_id) {
        return menuMapper.findRecentDateByMenuId(menuId, group_id);
    }

    // TODO : 날짜 중복 문제, 이름 중복문제
    public HashMap<String, Object> addSelfDish(String name, Date date, long ingredientId, long group_id) {
        HashMap<String, Object> result = new HashMap<>();
        if(menuMapper.findSelfDish(name, date, group_id) == null) {
            menuMapper.addSelfDish(name, date, group_id);
            menuMapper.addUsedIngredientSelfdish(Long.valueOf(menuMapper.findSelfDish(name, date, group_id).get("id").toString()), ingredientId);
            result = menuMapper.findSelfDish(name, date, group_id);
        } else {
            result.put("error", "해당 메뉴가 이미 존재합니다.");
        }
        
        return result;
    }
    

    // 메뉴에 해당하는 재료 추가 (관계 맺기)
    public List<HashMap<String, Object>> addUsedIngredient(long menuId, String name) {
        if(menuMapper.findIngredientByname(name) == null) {
            menuMapper.addIngredient(name);
        }
        menuMapper.addUsedIngredient(menuId, Long.valueOf(menuMapper.findIngredientByname(name).get("id").toString()));
        return getIngredientsByMenuId(menuId);
    }

    // 모든 재료들을 가져온다.
    public List<HashMap<String, Object>> getAllIngredients() {
        return menuMapper.findAllIngredient();
    }

    // 해당 메뉴에 들어가는 재료 구하기
    public List<HashMap<String, Object>> getIngredientsByMenuId(long menuId) {
        return menuMapper.findIngredientsByMenuId(menuId);
    }
    
    // 해당 재료를 사용하는 메뉴 구하기
    public List<HashMap<String, Object>> getMenuByIngredientId(long ingredientId) {
        return menuMapper.findMenuByIngredientId(ingredientId);
    }

}