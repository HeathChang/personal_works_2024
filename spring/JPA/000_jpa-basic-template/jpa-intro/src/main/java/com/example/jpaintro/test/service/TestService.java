package com.example.jpaintro.test.service;

import com.example.jpaintro.test.repository.UserQueryRepository;
import com.example.jpaintro.test.repository.dto.UserDto;
import com.example.jpaintro.test.repository.UserRepository;
import com.example.jpaintro.test.repository.entity.UserEntity;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class TestService {
    private final UserRepository repository;
    private ModelMapper modelMapper = new ModelMapper();
    private final UserQueryRepository userQueryRepository;

    public List<UserDto> getAllUsers() {
//        return userQueryRepository.findAllByQueryDsl();
                return repository.findAll().stream().map((element) -> modelMapper.map(element, UserDto.class)).collect(Collectors.toList());
    }

}
