package com.api.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.api.domain.Menu;
import org.apache.ibatis.annotations.Param;

import java.sql.Date;
import java.util.List;


@Mapper
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