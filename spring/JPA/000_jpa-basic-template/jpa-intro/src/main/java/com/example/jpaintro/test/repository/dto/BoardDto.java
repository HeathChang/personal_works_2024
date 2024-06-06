package com.example.jpaintro.test.repository.dto;

import com.example.jpaintro.test.repository.entity.UserEntity;
import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;
import lombok.Value;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * DTO for {@link com.example.jpaintro.test.repository.entity.BoardEntity}
 */
@Data
public class BoardDto implements Serializable {
    Long id;
    UserEntity userEntity;
    String title;
    String contents;
    LocalDateTime createdDate;
    LocalDateTime updatedDate;

    @QueryProjection
    public BoardDto(Long id, String title, String contents, LocalDateTime createdDate, LocalDateTime updatedDate) {
        this.id = id;

        this.title = title;
        this.contents = contents;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
    }
}