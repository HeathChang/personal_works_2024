package com.example.jpaintro.test.repository.dto;


import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;
import lombok.Value;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * DTO for {@link com.example.jpaintro.test.repository.entity.UserEntity}
 */
@Data

public class UserDto implements Serializable {
   private  Long id;
   private  String email;
   private  String name;
   private  LocalDateTime createdDate;
   private  LocalDateTime updatedDate;

   private List<BoardDto> boardList = new ArrayList<>();


    @QueryProjection
    public UserDto(Long id, String email, String name, LocalDateTime createdDate, LocalDateTime updatedDate) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
    }


    @QueryProjection
    public UserDto(Long id, String email, String name, LocalDateTime createdDate, LocalDateTime updatedDate, List<BoardDto> boardList) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.boardList = boardList;
    }
}