package com.example.gettingstartedmaven.test.controller;


import com.example.gettingstartedmaven.test.service.TestService;
import com.example.gettingstartedmaven.test.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/test")
public class TestController {
    @Autowired
    private TestService testService;

    @GetMapping("/hello")
    public String Test(){
        return "Hello";
    }

//    @GetMapping("/getAllUser")
//    public List<UserVO> getAllUser(){
//        return testService.getAllUsers();
//    }
}
