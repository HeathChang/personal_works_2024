package com.example.jpaintro.test.repository;

import com.example.jpaintro.test.repository.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

  public List<UserEntity> findAll();



}
