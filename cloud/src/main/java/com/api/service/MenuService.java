package com.api.service;

import java.sql.Date;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.api.domain.DailyMeal;
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

    public HashMap<Object,Object> addMenu(String name, int type) {
        HashMap<Object,Object> result = new HashMap<>();
        Menu menu = menuMapper.findMenuByName(name);

        if(menu != null) {
            result.put("message", "동일한 메뉴가 존재합니다.");
        } else {
            menuMapper.addMenu(name, type);
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

    public HashMap<Object,Object> editMenu(String name, int type) {
        HashMap<Object,Object> result = new HashMap<>();
        Menu menu = menuMapper.findMenuByName(name);

        if(menu == null) {
            result.put("message", "존재하지 않는 메뉴입니다.");
        } else {
            menuMapper.updateMenuType(name, type);
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

    public void updateMenuScore(int id) {
        menuMapper.updateMenuScore(id);
    }

    public List<HashMap<String, Object>> getAllMenu() {
        return menuMapper.findAllMenu();
    }

    public Menu getMenu(String name) {
        return menuMapper.findMenuByName(name);
    }

    public List<HashMap<String, Object>> searchMenu(String name) {
        return menuMapper.searchMenu(name);
    }

    // 일일 메뉴를 설정한다.
    // time 1 : 조식 / 2 : 중식 / 3 : 석식
    public HashMap<String, Object> addDailyMenu(DailyMeal menu){
        HashMap<String, Object> result = new HashMap<>();
        Menu flag = menuMapper.findMenuById(menu.getMenu());

        if(flag != null) {
            result.put("message", "동일한 메뉴가 존재합니다.");
        } else {
            menuMapper.addDailyMenu(menu.getDate(), menu.getTime(), menu.getGroup_id(), menu.getMenu());
            result.put("complete", "추가되었습니다.");
        }
        return result;
    }

    // 일일 메뉴를 수정한다.
    public void updateDailyMenu(DailyMeal menu){
        menuMapper.updateDailyMenu(menu.getDate(), menu.getTime(), menu.getGroup_id(), menu.getMenu());
    }

    // TODO: getAllDailyMenu
    // 일일 메뉴를 가져온다.
    /*
    public // getAllDailyMenu(){
        
    }*/

    public List<HashMap<String, Object>> getRecentDates(long menuId) {
        return menuMapper.findRecentDateByMenuId(menuId);
    }

    /*
    public HashMap<String, Object> addSelfDish(SelfDish selfDish) {
        menuMapper.addSelfDish(selfDish.getName(), selfDish.getDate_value());
        // TODO : Add UsedIngredient
    }
    */
}