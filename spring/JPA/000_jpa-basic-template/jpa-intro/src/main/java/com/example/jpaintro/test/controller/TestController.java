package com.example.jpaintro.test.controller;

import com.example.jpaintro.test.repository.dto.UserDto;
import com.example.jpaintro.test.repository.entity.UserEntity;
import com.example.jpaintro.test.service.TestService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Repository
@Slf4j
@RequiredArgsConstructor
public class TestController {
    private final TestService service;

    @GetMapping(value = "/")
    public List<UserDto> test() {
        return service.getAllUsers();
    }
}
