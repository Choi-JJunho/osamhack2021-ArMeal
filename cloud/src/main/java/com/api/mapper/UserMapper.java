package com.api.mapper;

import com.api.domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {
    void signup(String name, String password, String email, long group_id, String user_id);
    User findUserByName(@Param("_name")String name);
    User findUserById(@Param("_id")String id);
    User findUserByUserId(@Param("user_id")String userId);
    User findUserByEmail(@Param("_email")String email);
}