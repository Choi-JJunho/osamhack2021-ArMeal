package com.api.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.api.domain.Menu;
import org.apache.ibatis.annotations.Param;

import java.sql.Date;
import java.util.List;
import java.util.HashMap;


@Mapper
public interface MenuMapper {
    List<HashMap<String, Object>> findAllMenu(@Param("_groupId") long group_id);
    Menu findMenuById(@Param("_id")long id, @Param("_groupId") long group_id);
    Menu findMenuByName(@Param("_name")String name, @Param("_groupId") long group_id);
    List<HashMap<String, Object>> searchMenu(@Param("_name")String name, @Param("_groupId")long group_id);
    List<HashMap<String, Object>> findMenuByMenuType(@Param("menuType")int menuType); // 사용 안 함

    List<HashMap<String, Object>> findDailyMenuByDate(@Param("_date")Date date, @Param("_groupId")long group_id);
    List<HashMap<String, Object>> findAllDailyMenuByDates(@Param("_start")Date start, @Param("_end")Date end, @Param("_groupId")long group_id);
    
    HashMap<String, Object> findRecentDateByMenuId(@Param("_id")long menuId, @Param("_groupId")long group_id);
    List<HashMap<String, Object>> findRecent3DateByMenuId(@Param("_id")long menuId, @Param("_groupId")long group_id);
    List<HashMap<String, Object>> findMonthMenu(@Param("_groupId") long groupId, @Param("_date") Date date, @Param("_time") int time);

    HashMap<String,Object> findIngredientById(@Param("_id") long ingredient_id);
    HashMap<String,Object> findIngredientByname(@Param("_name") String name);
    List<HashMap<String, Object>> findIngredientsByMenuId(@Param("_menuId") long id);
    List<HashMap<String, Object>> findMenuByIngredientId(@Param("_ingredientId") long id);
    List<HashMap<String, Object>> findAllIngredient();
    List<HashMap<String, Object>> findIngredientInfoById(@Param("_ingredientId") long ingredient_id);
    List<HashMap<String, Object>> findIngredientInfoById_Self(@Param("_ingredientId") long ingredient_id);
    List<HashMap<String, Object>> findMenuInfoById_Self(@Param("_menuId") long menu_id);
    List<HashMap<String, Object>> findUsedIngredientsByMenuId(@Param("_menuId") long menu_id);
    HashMap<String, Object> findUsedIngredientsByMenuIdIngredientId(@Param("_ingredientId") long ingredient_id, @Param("_menuId") long menu_id);
    HashMap<String, Object> findSelfDish(@Param("_name") String name, @Param("_date") Date date, @Param("_groupId") long group_id);

    void addMenu(@Param("_name")String name, @Param("_menutype") int type, @Param("_groupId") long group_id);
    void addDailyMenu(@Param("dateValue")Date date, @Param("_time")int time, @Param("_groupId") long groupId, @Param("_menu") long menuId);
    void addSelfDish(@Param("_name")String name, @Param("_date")Date date, @Param("_groupId") long groupId);

    void addIngredient(@Param("_name")String name);
    void addUsedIngredient(@Param("_menuId")long menuId, @Param("_ingredientId")long ingredientId);
    void addUsedIngredientSelfdish(@Param("_sidedishId") long sidedishId, @Param("_ingredientId") long ingredientId);

    void updateMenuType(@Param("_name")String name, @Param("_menutype") int type, @Param("_groupId") long group_id);
    void updateMenuScore(@Param("_id")long id, @Param("_groupId") long group_id);
    
    void updateDailyMenu(@Param("dateValue")Date date, @Param("_time")int time, @Param("_groupId") long groupId, @Param("_menu") long menuId);

}
