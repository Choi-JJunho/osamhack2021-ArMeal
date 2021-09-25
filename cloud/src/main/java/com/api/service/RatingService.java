package com.api.service;

import java.sql.Date;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

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

    public void addRating(Rating rating) {
        ratingMapper.addRating(rating.getUser_id(), rating.getMenu_id(), rating.getRating_data());
    }

    public HashMap<String, Object> getRatingByDates(Date date) {
        List<HashMap<String, Object>> datas = ratingMapper.getRatingByDates(date);
        HashMap<String, Object> result = new HashMap<String, Object>();
        long total = 0;
        long cnt = 0;
        for(HashMap<String, Object> data : datas) {
            // 매우 좋음 기준으로 5씩 증가
            cnt += 5;
            total += Long.valueOf(data.get("rating").toString());
        }
        result.put("ratio", (total/cnt));
        return result;
    }
}