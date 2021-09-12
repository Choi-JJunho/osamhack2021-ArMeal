package com.api.service;

import com.api.domain.User;
import com.api.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
@Transactional
public class UserService {
    @Autowired
    private UserMapper mapper;
    
    @Autowired
    private PasswordEncoder passwordEncoder;

    public String getTime() {
        return mapper.getTime();
    }

    public void signup(String name, String password, String email, long groupId, String userId) {
        String pw = passwordEncoder.encode(password);
        mapper.signup(name, pw, email, groupId, userId);
    }

    public boolean login(String id, String password) {
        String pw = mapper.findUserById(id).getPassword();

        if(!passwordEncoder.matches(password, pw)) {
            System.out.println("비밀번호가 일치하지 않습니다.");
            return false;
        }
        return true;
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
