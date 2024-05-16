package com.example.gettingstartedmaven.test.service;


import com.example.gettingstartedmaven.test.mapper.UserMapper;
import com.example.gettingstartedmaven.test.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestService{
    @Autowired
    private UserMapper userMapper;


    public List<UserVO> Test(){
        List<UserVO> test = userMapper.getAllUsers();
        return test;
    }
}