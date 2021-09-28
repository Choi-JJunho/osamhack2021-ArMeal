package com.api.service;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.api.domain.DailyMeal;
import com.api.domain.Menu;
import com.api.domain.Rating;
import com.api.mapper.MenuMapper;
import com.api.mapper.RatingMapper;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class RatingService extends Exception {
    @Autowired
    RatingMapper ratingMapper;

    @Autowired
    MenuMapper menuMapper;

    public void addRating(Rating rating) {
        menuMapper.updateMenuScore(rating.getMenu_id(), rating.getRating_data());
        ratingMapper.addRating(rating.getUser_id(), rating.getMenu_id(), rating.getRating_data());
        if(rating.getRating_data() == 1) {
            ratingMapper.updateBadReason(rating.getBad_reason());
        }
    }
    
    // 사용자가 해당 끼니에 만족도 조사를 실시했을 때 실행되는 로직
    // date : 날짜 / time : 아침,점심,저녁 / rating_value : 점수
    public void addDailyRating(long userId, Date date, int time, int rating_value, int badReason) {
        List<HashMap<String, Object>> datas = menuMapper.findDailyMenuByDate(date);
        long menuId;
        // 각 메뉴별로 점수가 들어간다.
        for(HashMap<String, Object> data : datas) {
            menuId = Long.valueOf(data.get("menu").toString());
            addRating(new Rating(userId, menuId, rating_value, badReason));
        }
    }

    // 메뉴별 통계값을 모두 가져온다.
    public List<HashMap<String, Object>> getRatioAllMenu() {
        return ratingMapper.findRatioOfAllMenu();
    }
    /* 해당 로직 SQL로 구성하기
    public HashMap<String, Object> getRatingByDates(String str) {
        Date date = Date.valueOf(str);
        List<HashMap<String, Object>> datas = ratingMapper.getRatingByDates(date);
        HashMap<String, Object> result = new HashMap<String, Object>();
        long total = 0;
        long cnt = 0;
        for(HashMap<String, Object> data : datas) {
            // 매우 좋음 기준으로 5씩 증가
            cnt += 5;
            if(data.get("rating") != null) {
                total += Long.valueOf(data.get("rating").toString());
            }
        }
        
        if(cnt == 0) {
            result.put("message", "nodata");
        } else {
            result.put("ratio", (total * 100) / cnt);
        }
        
        return result;
    }
    */
}