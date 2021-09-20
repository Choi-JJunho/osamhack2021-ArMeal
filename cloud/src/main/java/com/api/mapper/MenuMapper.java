package com.api.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.api.domain.Menu;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public class MenuMapper {
    void setdailymenu(String date_value, int time, long group_id, long menu);
    
}
