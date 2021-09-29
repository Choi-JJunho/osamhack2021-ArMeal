package com.api.controller;

import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.sql.Date;

import com.api.domain.APIDataItem;
import com.api.domain.Rating;
import com.api.domain.DailyMeal;

import com.api.mapper.RatingMapper;
import com.api.service.MenuService;
import com.api.service.RatingService;
import com.api.util.ParsingData;
import com.google.gson.JsonObject;

import io.swagger.annotations.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class RatingController {

    @Autowired
    ParsingData parsingData;

    @Autowired
    MenuService menuService;

    @Autowired
    RatingService ratingService;
    
    // 평가를 진행하기 위한 서비스
    /* 현재 일일 메뉴에 대한 평가만 존재하므로 해당 서비스 보류
    @RequestMapping(value = "/add/rating", method = RequestMethod.POST)
    public ResponseEntity addRating(@RequestBody Rating rate) {
        ratingService.addRating(rate);
        return new ResponseEntity<String>("testing", HttpStatus.OK);
    }
    */
    
    // 해당하는 날짜의 만족도조사 결과를 얻기 위한 서비스
    @RequestMapping(value = "/get/rating/{start}/{end}", method = RequestMethod.POST)
    public ResponseEntity getratingbydate(@PathVariable("start") String start, @PathVariable("end") String end) {
        return new ResponseEntity<List<HashMap<String, Object>>>(ratingService.getRatioByDates(start, end), HttpStatus.OK);
    }
    

    // 일일 만족도 조사에 대한 서비스
    @RequestMapping(value = "/add/rating/daily", method = RequestMethod.POST)
    public ResponseEntity addDailyRating(@ApiParam(value = "(required: userId, date, time, rating_value, badReason)", required = true) @RequestBody HashMap<String, Object> value) {
        long userId = Long.valueOf(value.get("userId").toString());
        Date date = Date.valueOf(value.get("date").toString());
        int time = Integer.valueOf(value.get("time").toString());
        int rating_value = Integer.valueOf(value.get("rating_value").toString());
        int badReason = Integer.valueOf(value.get("badReason").toString());
        return new ResponseEntity<List<HashMap<String, Object>>>(ratingService.addDailyRating(userId, date, time, rating_value, badReason), HttpStatus.OK);
    }
    /* 예제 : 2021년 9월 20일의 조식에 대해 평가
    {
        "userId":1,
        "date":"2021-09-20",
        "time":1,
        "rating_value":1,
        "badReason":5
    }
    */
    
    // 메뉴별 통계를 위한 서비스
    @RequestMapping(value = "/get/ratio/all", method = RequestMethod.GET)
    public ResponseEntity getAllRatio() {
        return new ResponseEntity<List<HashMap<String,Object>>>(ratingService.getRatioAllMenu(), HttpStatus.OK);
    }
}
