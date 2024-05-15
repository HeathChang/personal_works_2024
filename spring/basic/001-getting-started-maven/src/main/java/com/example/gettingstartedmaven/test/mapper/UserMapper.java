package com.example.gettingstartedmaven.test.mapper;


import com.example.gettingstartedmaven.test.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    List<UserVO> getAllUsers();
}
