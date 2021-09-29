package com.api.service;

import java.util.HashMap;

import com.api.domain.User;
import com.api.mapper.UserMapper;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
@Transactional
public class UserService {
    @Autowired
    private UserMapper usermapper;
    
    // bycrypt 암호화를 위해 등록
    @Autowired
    private PasswordEncoder passwordEncoder;

    // 회원가입
    public HashMap<String, Object> signup(String name, String password, String email, long groupId, String loginId) {

        final User selectUser = usermapper.findUserByLoginId(loginId);
        HashMap<String, Object> result = new HashMap<>();
        
        // 가입된 유저인지 확인
        if (selectUser != null) {
            result.put("message", "이미 가입된 유저입니다.");
            return result;
        }

        // 이메일 중복 확인
        if (selectUser != null) {
            User selectUser2 = usermapper.findUserByEmail(email);
            if (selectUser2 != null) {
                result.put("message", "이미 가입된 이메일입니다.");
                return result;
            }
        }

        String pw = passwordEncoder.encode(password);
        usermapper.signup(loginId, pw, email, name, groupId);
        result.put("message", "회원가입 완료");
        return result;
    }

    // 로그인
    public HashMap<String,Object> login(String id, String password) {
        String pw = usermapper.findUserByLoginId(id).getPassword();
        ObjectMapper objectMapper = new ObjectMapper();
        HashMap<String,Object> result = new HashMap<>();

        if(pw == null || !passwordEncoder.matches(password, pw)) {
            result.put("message", "비밀번호 불일치");
            return result;
        }
        User user = usermapper.findUserByLoginId(id);
        result = objectMapper.convertValue(user, HashMap.class);
        return result;
    }
}
