package com.example.jpaintro.test.repository.entity;


import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@Table(name = "board")
@Entity
public class BoardEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;



    @JoinColumn(name = "userId")
    @ManyToOne(fetch = FetchType.LAZY)
    //lazy  : 이 엔티티 뽑아도 안 뽑음
    //eager : 이 엔티티 뽑을 때 이것도 뽑음
    private UserEntity userEntity;



    private String title;
    private String contents;

    @Column(name = "createdDate", columnDefinition = "DATETIME")
    @CreatedDate
    private LocalDateTime createdDate;

    @Column(name = "updatedDate", columnDefinition = "DATETIME")
    @LastModifiedDate
    private LocalDateTime updatedDate;
}
