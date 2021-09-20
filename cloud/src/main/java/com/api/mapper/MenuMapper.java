package com.api.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.api.domain.Menu;
import org.apache.ibatis.annotations.Param;

import java.sql.Date;
import java.util.List;


@Mapper
<<<<<<< HEAD
public class MenuMapper {
    void setdailymenu(String date_value, int time, long group_id, long menu);
    
}
=======
public interface MenuMapper {
    List<Menu> findAllMenu();

    void AddMenu(String name);
    Menu findMenuById(@Param("_id")long id);
    List<Menu> findMenuByName(@Param("_name")String name);
    List<Menu> findMenuByMenuType(@Param("menuType")int menuType);

    void updateMenuScore(@Param("_name")String name, @Param("_score") long score);
    void AddDailyMenu(@Param("dateValue")Date date, @Param("_time")int time, @Param("groupId") long groupId, @Param("_menu") long menuId);
    void UpdateDailyMenu(@Param("dateValue")Date date, @Param("_time")int time, @Param("groupId") long groupId, @Param("_menu") long menuId, @Param("beforeDate")Date beforeDate, @Param("beforeTime")int beforeTime);
}
>>>>>>> 0df4c5eda3e863bcf53ddc909e45f079afbe6a46
