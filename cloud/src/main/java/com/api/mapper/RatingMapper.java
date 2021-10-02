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
    HashMap<String, Object> getRatingById(@Param("_id")long id);
    HashMap<String, Object> getRatingByUserId(@Param("_userId")long userId);
    HashMap<String, Object> getRatingOfMenu(@Param("_targetId")long targetId);
    HashMap<String, Object> getRatingOfDailyMenu(@Param("_targetId")long targetId);

    void addRating(@Param("_userId")long userId, @Param("_targetId")long targetId, @Param("_targetType")int targetType, @Param("ratingData")int ratingData, @Param("_groupId") long group_id);
    void updateRating(@Param("_id")long id, @Param("_ratingData")int ratingData);
    void updateBadReason(@Param("_badreason") int badReason, @Param("_groupId") long group_id);
    List<HashMap<String, Object>> findAllRating(@Param("_groupId") long group_id);
    List<HashMap<String, Object>> findRatioByDates(@Param("_start") Date start, @Param("_end") Date end, @Param("_groupId") long group_id);
    List<HashMap<String, Object>> findBadReasonByMenuId(@Param("_id")long id, @Param("_groupId") long group_id);
    List<HashMap<String, Object>> findRatioOfAllMenu(@Param("_groupId") long group_id);
}
