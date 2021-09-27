package com.api.service;

import java.sql.Date;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.api.domain.Menu;
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

    public HashMap<Object,Object> updateMenuScore(String name, long score) {
        HashMap<Object,Object> result = new HashMap<>();
        Menu menu = menuMapper.findMenuByName(name);

        if(menu == null) {
            result.put("message", "존재하지 않는 메뉴입니다.");
        } else {
            menuMapper.updateMenuScore(name, score);
            result.put("message", "메뉴 \"" + name + "\"의 점수가 \"" + score + "\"로 설정되었습니다.");
        }

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

    // TODO: getMenuIdByName
    // Menu 테이블에서 name으로 id 값을 찾아서 반환한다.
    public int getMenuIdByName(String name) {
        return 0;
    }

    // TODO
    public void setAllScore() {
        final Menu selectMenu = menuMapper.findSumOfRating_data();
        /*
        for () {
            AddScore()
        }
        */
    }

    // 해당 name에 해당하는 메뉴의 score 설정
    public void setScore(long id, int score) {
        try {
            menuMapper.updateMenuScore(id, score);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // TODO: getMenuScore
    // 해당 메뉴의 평균 점수를 구한다.
    public int getMenuScore() {
        int score = 0;
        return score;
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