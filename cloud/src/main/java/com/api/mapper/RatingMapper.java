package com.api.mapper;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;

import com.api.domain.Rating;
import com.api.domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface RatingMapper {
    void addRating(@Param("_userId")long userId, @Param("_menuId")long menuId, @Param("ratingData")int ratingData, @Param("_groupId") long group_id);
    void updateBadReason(@Param("_badreason") int badReason, @Param("_groupId") long group_id);
    List<HashMap<String, Object>> findAllRating(@Param("_groupId") long group_id);
    List<HashMap<String, Object>> findRatioByDates(@Param("_start") Date start, @Param("_end") Date end, @Param("_groupId") long group_id);
    List<HashMap<String, Object>> findBadReasonByMenuId(@Param("_id")long id, @Param("_groupId") long group_id);
    List<HashMap<String, Object>> findRatioOfAllMenu(@Param("_groupId") long group_id);
    
    void calcSumOfRating_data(@Param("_groupId") long group_id);
}
