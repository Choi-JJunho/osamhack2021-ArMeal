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
    private UserMapper usermapper;
    
    @Autowired
    private PasswordEncoder passwordEncoder;

    public String signup(String name, String password, String email, long groupId, String userId) {

        final User selectUser = usermapper.findUserByUserId(userId);
        
        // 가입된 유저인지 확인
        if (selectUser != null) {
            return "이미 가입되어있는 아이디입니다.";
        }

        // 이메일 중복 확인
        if (selectUser != null) {
            User selectUser2 = usermapper.findUserByEmail(email);
            if (selectUser2 != null) {
                return "이미 가입되어있는 이메일입니다.";
            }
        }

        String pw = passwordEncoder.encode(password);
        usermapper.signup(name, pw, email, groupId, userId);
        return "ok";
    }

    public boolean login(String id, String password) {
        String pw = usermapper.findUserById(id).getPassword();

        if(pw == null) {
            return false;
        }

        if(!passwordEncoder.matches(password, pw)) {
            System.out.println("비밀번호가 일치하지 않습니다.");
            return false;
        }
        return true;
    }
/*
    public int deleteData(HashMap<Object, Object> vo) throws Exception {
        return usermapper.deleteData(vo);
    }

    public int insertData(HashMap<Object, Object> vo) throws Exception {
        return usermapper.insertData(vo);
    }

    public int updateData(HashMap<Object, Object> vo) throws Exception {
        return usermapper.updateData(vo);
    }
    */

}
