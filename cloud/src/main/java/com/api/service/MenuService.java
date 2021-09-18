package com.api.service;

import java.sql.Date;

import com.api.mapper.MenuMapper;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class MenuService {
    
    MenuMapper menuMapper;

    // TODO : AddScore
    // 해당 name에 해당하는 메뉴의 score 증가
    public void AddScore(String name, int score) {

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

}