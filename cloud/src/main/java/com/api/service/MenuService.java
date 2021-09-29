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

    public HashMap<Object,Object> addMenu(String name, int type) {
        HashMap<Object,Object> result = new HashMap<>();
        Menu menu = menuMapper.findMenuByName(name);

        if(menu != null) {
            result.put("message", "동일한 메뉴가 존재합니다.");
        } else {
            menuMapper.addMenu(name, type);
            switch(type) {
                case 1:
                    result.put("message", "메뉴 \"" + name + "\"가 조식으로 추가되었습니다.");
                    break;
                case 2:
                    result.put("message", "메뉴 \"" + name + "\"가 중식으로 추가되었습니다.");
                    break;
                case 3:
                    result.put("message", "메뉴 \"" + name + "\"가 석식으로 추가되었습니다.");
                    break;
                case 4:
                    result.put("message", "메뉴 \"" + name + "\"가 브런치로 추가되었습니다.");
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
                    result.put("message", "메뉴 \"" + name + "\"가 조식으로 수정되었습니다.");
                    break;
                case 2:
                    result.put("message", "메뉴 \"" + name + "\"가 중식으로 수정되었습니다.");
                    break;
                case 3:
                    result.put("message", "메뉴 \"" + name + "\"가 석식으로 수정되었습니다.");
                    break;
                case 4:
                    result.put("message", "메뉴 \"" + name + "\"가 브런치로 수정되었습니다.");
                    break;
            }
        }

        return result;
    }

    // 사용 안 함 - 제거 예정
    /*public HashMap<Object,Object> updateAllMenuScore() {
        HashMap<Object,Object> result = new HashMap<>();
        ratingMapper.calcSumOfRating_data();

        result.put("message", "점수가 집계되었습니다.");

        return result;
    }*/

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