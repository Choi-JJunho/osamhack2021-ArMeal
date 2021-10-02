package com.api.service;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.api.domain.DailyMeal;
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

    public HashMap<String, Object> addRating(Rating rating) {
        HashMap<String, Object> result = new HashMap<>();

        ratingMapper.addRating(rating.getUser_id(), rating.getTarget_id(), rating.getTarget_type(), rating.getRating_data());
        if(rating.getRating_data() == 1) {
            ratingMapper.updateBadReason(rating.getBad_reason());
        }
        // TODO : Target 반영해서 수정하기(구현)
        menuMapper.updateMenuScore(rating.getMenu_id());

        result.put("message", "메뉴 ID \"" + rating.getMenu_id() + "\"의 점수가 갱신되었습니다.");

        return result;
    }
    
    public HashMap<Object,Object> editRating(long id, int ratingData) {
        HashMap<Object,Object> result = new HashMap<>();
        Rating rating = ratingMapper.getRatingById(id);

        if(rating == null) {
            result.put("message", "존재하지 않는 평가입니다.");
        } else {
            ratingMapper.updateRating(id, ratingData);
            result.put("message", "평가 \"" + id + "\"가 \"" + ratingData + "\"로 수정되었습니다.");
        }

        return result;
    }
    
    // 사용자가 해당 끼니에 만족도 조사를 실시했을 때 실행되는 로직
    // date : 날짜 / time : 아침,점심,저녁 / rating_value : 점수
    public List<HashMap<String, Object>> addDailyRating(long userId, Date date, int time, int rating_value, int badReason) {
        List<HashMap<String, Object>> datas = menuMapper.findDailyMenuByDate(date);
        long menuId;
        // 각 메뉴별로 점수가 들어간다.
        for(HashMap<String, Object> data : datas) {
            menuId = Long.valueOf(data.get("menu").toString());
            addRating(new Rating(userId, menuId, rating_value, badReason));
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return getRatioByDates(sdf.format(date), sdf.format(date));
    }

    // 메뉴별 통계값을 모두 가져온다.
    public List<HashMap<String, Object>> getRatioAllMenu() {
        return ratingMapper.findRatioOfAllMenu();
    }
    
    public List<HashMap<String, Object>> getRatioByDates(String start, String end) {
        return ratingMapper.getRatioByDates(Date.valueOf(start), Date.valueOf(end));
    }
}