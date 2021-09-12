package com.api.mapper;

import java.util.List;

import com.api.domain.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    String getTime();
    List<User> selectAllUser();
    void insertUser(User user);
}
