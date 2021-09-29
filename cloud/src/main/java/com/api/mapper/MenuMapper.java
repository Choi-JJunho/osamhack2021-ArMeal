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
    Menu findMenuById(@Param("_id")long id); // 사용 안 함
    Menu findMenuByName(@Param("_name")String name);
    List<HashMap<String, Object>> searchMenu(@Param("_name")String name);
    List<HashMap<String, Object>> findMenuByMenuType(@Param("menuType")int menuType); // 사용 안 함
    List<HashMap<String, Object>> findDailyMenuByDate(@Param("_date")Date date);
    List<HashMap<String, Object>> findRecentDateByMenuId(@Param("_id")long menuId);

    void addMenu(@Param("_name")String name, @Param("_menutype") int type);
    void addDailyMenu(@Param("dateValue")Date date, @Param("_time")int time, @Param("groupId") long groupId, @Param("_menu") long menuId);

    void updateMenuType(@Param("_name")String name, @Param("_menutype") int type);
    void updateAllMenuScore(); // 사용 안 함 - 제거 예정
    void addSelfDish(@Param("_name")String name, @Param("_date")Date date);
    
    void updateDailyMenu(@Param("dateValue")Date date, @Param("_time")int time, @Param("groupId") long groupId, @Param("_menu") long menuId);

}
