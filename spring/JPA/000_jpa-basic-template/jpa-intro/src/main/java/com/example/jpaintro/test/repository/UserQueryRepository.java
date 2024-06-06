package com.example.jpaintro.test.repository;


import com.example.jpaintro.test.repository.dto.QBoardDto;
import com.example.jpaintro.test.repository.dto.QUserDto;
import com.example.jpaintro.test.repository.dto.UserDto;
import com.example.jpaintro.test.repository.entity.QBoardEntity;
import com.example.jpaintro.test.repository.entity.QUserEntity;
import com.example.jpaintro.test.repository.entity.UserEntity;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.JPQLQueryFactory;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.example.jpaintro.test.repository.entity.QUserEntity.userEntity;
import static com.example.jpaintro.test.repository.entity.QBoardEntity.boardEntity;
import static com.querydsl.core.types.dsl.Expressions.list;

@Repository
@RequiredArgsConstructor
public class UserQueryRepository {
    private final JPQLQueryFactory query;

    public List<UserDto> findAllByQueryDsl () {


        return query.select(
                new QUserDto(
                        userEntity.id,
                        userEntity.email,
                        userEntity.name,
                        userEntity.createdDate,
                        userEntity.updatedDate
                )
        )
                .from(userEntity)
                .join(boardEntity).on(userEntity.id.eq(boardEntity.userEntity.id))
                .fetch();
    }

}
