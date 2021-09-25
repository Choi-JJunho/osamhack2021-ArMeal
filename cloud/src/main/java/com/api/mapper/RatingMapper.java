package com.api.mapper;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import com.api.domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface RatingMapper {
    void addRating(@Param("_userId")long userId, @Param("_menuId")long menuId, @Param("ratingData")int ratingData);
    List<HashMap<String, Object>> getRatingByDates(@Param("_date") Date date);
}
