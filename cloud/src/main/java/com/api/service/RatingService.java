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

import javax.print.attribute.IntegerSyntax;

import com.api.domain.DailyMeal;
import com.api.domain.Rating;
import com.api.mapper.MenuMapper;
import com.api.mapper.RatingMapper;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

@Service
@Transactional
public class RatingService extends Exception {
    @Autowired
    RatingMapper ratingMapper;

    @Autowired
    MenuMapper menuMapper;

    public HashMap<String, Object> addRating(Rating rating) {
        HashMap<String, Object> result = new HashMap<>();

        ratingMapper.addRating(rating.getUser_id(), rating.getTarget_id(), rating.getTarget_type(), rating.getDate(), rating.getRating_data(), rating.getGroup_id());
        if(rating.getRating_data() == 1) {
            ratingMapper.updateBadReason(rating.getBad_reason(), rating.getGroup_id());
        }
        menuMapper.updateMenuScore(rating.getTarget_id(), rating.getGroup_id());

        result.put("message", "메뉴 ID \"" + rating.getTarget_id() + "\"의 점수가 갱신되었습니다.");

        return result;
    }
    
    public HashMap<String, Object> editRating(long id, int ratingData) {
        HashMap<String, Object> result = new HashMap<>();
        HashMap<String, Object> rating = ratingMapper.getRatingById(id);

        if(rating == null) {
            result.put("message", "존재하지 않는 평가입니다.");
        } else {
            ratingMapper.updateRating(id, ratingData);
            result.put("message", "평가 \"" + id + "\"가 \"" + ratingData + "\"로 수정되었습니다.");
        }

        return result;
    }
    
    public List<HashMap<String, Object>> addDailyRatingList(List<HashMap<String, Object>> datas) {
        Date date = Date.valueOf("1900-01-01");
        long group_id = 0;
        for(HashMap<String, Object> value : datas) {
            date = Date.valueOf(value.get("date").toString());
            group_id = Long.valueOf(value.get("group_id").toString());
            long userId = Long.valueOf(value.get("userId").toString());
            int time = Integer.valueOf(value.get("time").toString());
            int rating_value = Integer.valueOf(value.get("rating_value").toString());
            int badReason = Integer.valueOf(value.get("badReason").toString());
            
            addDailyRating(userId, group_id, date, time, rating_value, badReason);
        }
        return ratingMapper.findRatioByDates(date, date, group_id);
    }

    // 사용자가 해당 끼니에 만족도 조사를 실시했을 때 실행되는 로직
    // date : 날짜 / time : 아침,점심,저녁 / rating_value : 점수 / target_type 1 : Menu, 2 : Daily_menu
    public void addDailyRating(long userId, long group_id, Date date, int time, int rating_value, int badReason) {
        List<HashMap<String, Object>> datas = menuMapper.findDailyMenuByDate(date, group_id);
        long menuId;
        // 각 메뉴별로 점수가 들어간다.
        for(HashMap<String, Object> data : datas) {
            menuId = Long.valueOf(data.get("menu").toString());
            addRating(new Rating(userId, date, menuId, 2, group_id, rating_value, badReason));
        }
    }

    // 전체 만족도에 대한 통계를 가져온다.
    public List<HashMap<String, Object>> getRatioAll(long group_id) {
        return ratingMapper.findRatioOfAll(group_id);
    }

    // 메뉴별 통계값을 모두 가져온다.
    public List<HashMap<String, Object>> getRatioAllMenu(long group_id) {
        return ratingMapper.findRatioOfAllMenu(group_id);
    }
    
    public List<HashMap<String, Object>> getRatioByDates(String start, String end, long group_id) {
        return ratingMapper.findRatioByDates(Date.valueOf(start), Date.valueOf(end), group_id);
    }

    public List<HashMap<String, Object>> getRatioByDatesTime(String start, String end, int time, long group_id) {
        return ratingMapper.findRatioByDates(Date.valueOf(start), Date.valueOf(end), group_id);
    }


    // 실 사용 서비스
    public List<HashMap<String, Object>> getCountOfratingData(long group_id) {
        return ratingMapper.findCountOfratingData(group_id);
    }

    public List<HashMap<String, Object>> getRatingTop5(long group_id) {
        return ratingMapper.findRatingTop5(group_id);
    }

    public List<HashMap<String, Object>> getDailyRatioByDate(long group_id, Date date) {
        return ratingMapper.findDailyRatioByDate(group_id, date);
    }

    public List<HashMap<String, Object>> getRatingMonth(List<HashMap<String, Object>> datas) {
        List<HashMap<String, Object>> result = new ArrayList<HashMap<String, Object>>();
        List<HashMap<String, Object>> temp = new ArrayList<HashMap<String, Object>>();

        List<Object> brst = new ArrayList<Object>();
        List<Object> lunc = new ArrayList<Object>();
        List<Object> dinr = new ArrayList<Object>();

        String start;
        Date date;
        HashMap<String, Object> msgsend = new HashMap<String, Object>();
        
        if(datas == null) {
            msgsend.clear();
            msgsend.put("error", "nodata");
            result.add(msgsend);
        }

        for(HashMap<String, Object> data : datas) {
            if(data.get("year") == null || data.get("month") == null || data.get("group_id") == null) {
                msgsend.clear();
                msgsend.put("error", "wrongType");
                result.add(msgsend);
                continue;
            } else {
                start = data.get("year").toString()+"-"+ data.get("month").toString()+"-"+"01";
                date = Date.valueOf(start);
                temp = ratingMapper.findRatingMonth(Long.valueOf(data.get("group_id").toString()), date);
                
                if (temp.size() == 0) {
                    brst.add(0);
                    lunc.add(0);
                    dinr.add(0);
                } else {
                    for(HashMap<String, Object> value : temp) {
                        switch(Integer.valueOf(value.get("time").toString())) {
                            case 1:
                                brst.add(value.get("ratio"));
                                break;
                            case 2:
                                lunc.add(value.get("ratio"));
                                break;
                            case 3:
                                dinr.add(value.get("ratio"));
                                break;
                            default:
                                break;
                        }
                    }
                }    
            }
        }


        HashMap<String, Object> input = new HashMap<String, Object>();
        for(int j = 1; j <= 3; j++) {
            input.put("time", j);
            if(j == 1) {
                input.put("rating", brst);
            } else if (j == 2) {
                input.put("rating", lunc);
            } else {
                input.put("rating", dinr);
            }
            Gson gson = new Gson();
            HashMap<String, Object> jsonObject = gson.fromJson(input.toString(), new TypeToken<HashMap<String, Object>>(){}.getType());
            result.add(jsonObject);
            input.clear();
        }
        return result;
    }
    
    

}