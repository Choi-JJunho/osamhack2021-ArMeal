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
        menuMapper.addMenu(name, menutype);
        return result;
    }

 //   public void updateMenu() {}

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

    // TODO: getMenuIdByName
    // Menu 테이블에서 name으로 id 값을 찾아서 반환한다.
    public int getMenuIdByName(String name) {
        return 0;
    }

    // 구현 방안
    // 1. Rating 테이블에서 Menu_id를 기준으로 group by하여 sum(rating_data) 값을 조회한다. (Menu_id와 sum(rating_data) 칼럼만 뽑아냄) [완료]
    // TODO : 2. 이 값(Menu_id와 sum(rating_data) 칼럼)을 Menu 테이블의 해당 id에 score로 설정한다. (SetScore 메소드 사용)
    // selectMenu에서 칼럼 둘을 변수 2개로 따로 뽑아서 for문 돌리는 걸로 구상 중, Menu Object 형을 어떻게 이용해야 변수 2개로 뽑아낼지.
    public void setAllScore() {
        final Menu selectMenu = menuMapper.findSumOfRating_data();
        /*
        for () {
            AddScore()
        }
        */
    }

    // 해당 name에 해당하는 메뉴의 score 설정
    public void setScore(String name, int score) {
        try {
            menuMapper.updateMenuScore(name, score);
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