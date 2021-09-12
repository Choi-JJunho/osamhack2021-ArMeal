package com.api.mapper;

import java.util.List;

import com.api.domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {
    String getTime();
    void signup(String name, String password, String email, long group_id, String user_id);
    User findUserByName(@Param("_name")String name);
    User findUserById(@Param("_id")String id);
}
