package com.api.mapper;

import java.util.List;

import com.api.domain.Group;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface GroupMapper {
    List<Group> findAllGroup();
    Group findGroupById(@Param("_id") int id);
}
