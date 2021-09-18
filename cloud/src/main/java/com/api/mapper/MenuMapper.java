package com.api.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.api.domain.Menu;
import org.apache.ibatis.annotations.Param;

@Mapper
public class MenuMapper {
    void AddMenu(String name);
    Menu findMenuById(@Param("_name")String name);
    Menu findUserByName(@Param("_id")String id);
    Menu findIngredientById(@Param("menu_id")long menuId);
    Menu findUserByEmail(@Param("_email")String email);
}
