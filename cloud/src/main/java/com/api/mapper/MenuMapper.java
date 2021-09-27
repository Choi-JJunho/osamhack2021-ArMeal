package com.api.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.api.domain.Menu;
import org.apache.ibatis.annotations.Param;

import java.sql.Date;
import java.util.List;
import java.util.HashMap;


@Mapper
public interface MenuMapper {
    List<HashMap<String, Object>> findAllMenu();
    Menu findMenuById(@Param("_id")long id);
    Menu findMenuByName(@Param("_name")String name);
    List<HashMap<String, Object>> findMenuByMenuType(@Param("menuType")int menuType);
    Menu findSumOfRating_data();
    List<HashMap<String, Object>> findDailyMenuByDate(@Param("_date")Date date);
    List<HashMap<String, Object>> findRecentDateByMenuId(@Param("_id")long menuId);

    void addMenu(@Param("_name")String name,@Param("_menutype") int menutype);
    void addDailyMenu(@Param("dateValue")Date date, @Param("_time")int time, @Param("groupId") long groupId, @Param("_menu") long menuId);

    void updateMenuScore(@Param("_id")long id, @Param("_score") long score);
    void updateDailyMenu(@Param("dateValue")Date date, @Param("_time")int time, @Param("groupId") long groupId, @Param("_menu") long menuId);

}
