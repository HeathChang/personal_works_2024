package com.example.jpaintro.test.repository.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.querydsl.core.annotations.QueryProjection;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.repository.EntityGraph;

import java.time.LocalDateTime;
import java.util.List;

@Table(name = "user")
@Entity


public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //기본키 생성 전략(maria, mysql은 Identity)
    @Column(name = "id", columnDefinition = "BIGINT(11)")
    private Long id;




    @Column(name = "email", columnDefinition = "VARCHAR(256)")
    private String email;
    @Column(name = "name", columnDefinition = "VARCHAR(256)")
    private String name;


    @Column(name = "createdDate", columnDefinition = "DATETIME")
    @CreatedDate
    private LocalDateTime createdDate;


    @Column(name = "updatedDate", columnDefinition = "DATETIME")
    @LastModifiedDate
    private LocalDateTime updatedDate;



    @OneToMany(mappedBy = "userEntity")
    private List<BoardEntity> boardList;


}
