package com.api.service;

import java.sql.Date;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import com.api.domain.Menu;
import com.api.mapper.MenuMapper;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class MenuService extends Exception {
    
    MenuMapper menuMapper;

    public HashMap<Object,Object> AddMenu(String name, int menutype) {
        /*
        HashMap<Object,Object> result = new HashMap<>();
        Menu menu = menuMapper.findMenuByName(name);
        if(menu != null) {
            result.put("message", "동일한 메뉴가 존재합니다.");
        } else {
            result.put("message", "메뉴 \"" + name + "\"가 추가되었습니다.");
        }
        */
        HashMap<Object,Object> result = new HashMap<>();
        result.put("message", "메뉴 \"" + name + "\"가 추가되었습니다.");
        menuMapper.AddMenu(name, menutype);
        return result;
    }

    public List<HashMap<String, Object>> getAllMenu() {
        List<HashMap<String, Object>> result = new ArrayList<HashMap<String,Object>>();
        System.out.println(menuMapper.findAllMenu());
        if(menuMapper.findAllMenu() == null) {
            System.out.println(menuMapper.findAllMenu());
            HashMap<String,Object> res = new HashMap<>();
            res.put("message", "메뉴가 존재하지 않습니다.");
            result.add(res);
        } else {
            result = menuMapper.findAllMenu();
        }
        return result;
    }

    // TODO : AddScore
    // 해당 name에 해당하는 메뉴의 score 증가
    public void AddScore(String name, int score) {
        try {
            menuMapper.updateMenuScore(name, score);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // TODO : SetDailyMenu
    // 일일 메뉴를 설정한다.
    // time 1 : 조식 / 2 : 중식 / 3 : 석식
    public void SetDailyMenu(Date date, String name, int time, int groupId, int menuId){
        menuMapper.AddDailyMenu(date, time, groupId, menuId);
    }

    // TODO : UpdateDailyMenu
    // 일일 메뉴를 수정한다.
    public void UpdateDailyMenu(Date date, String name, int time, int groupId, int menuId){
        
        menuMapper.AddDailyMenu(date, time, groupId, menuId);
    }

    // TODO: getMenuScore
    // 해당 메뉴의 평균 점수를 구한다.
    public int getMenuScore() {
        int score = 0;
        return score;
    }

}