package com.api.service;

import com.api.domain.User;
import com.api.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserMapper mapper;

    public List<User> selectAllUser() {
        return mapper.selectAllUser();
    }

    public void addUser(User user) {
        mapper.insertUser(user);
    }

    public String getTime() {
        return mapper.getTime();
    }
/*
    public int deleteData(HashMap<Object, Object> vo) throws Exception {
        return mapper.deleteData(vo);
    }

    public int insertData(HashMap<Object, Object> vo) throws Exception {
        return mapper.insertData(vo);
    }

    public int updateData(HashMap<Object, Object> vo) throws Exception {
        return mapper.updateData(vo);
    }
    */
}
