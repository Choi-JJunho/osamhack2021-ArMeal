package com.api.mapper;

import java.util.List;
import com.api.domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {
    void signup(@Param("loginId")String loginId, @Param("_pw")String password, @Param("_email")String email, @Param("_name")String name, @Param("groupId")long group_id);
    User findUserByName(@Param("_name")String name);
    User findUserById(@Param("_id")String id);
    User findUserByLoginId(@Param("login_id")String loginId);
    User findUserByEmail(@Param("_email")String email);
    List<User> findUserByGroupId(@Param("_groupId")int groupId);
}
