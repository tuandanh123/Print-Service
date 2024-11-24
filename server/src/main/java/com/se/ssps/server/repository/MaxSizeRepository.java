package com.se.ssps.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.se.ssps.server.entity.configuration.MaxFileSize;

import jakarta.transaction.Transactional;

@Repository
public interface MaxSizeRepository extends JpaRepository<MaxFileSize,Integer> {
    @Query("select s.maxFileSize from MaxFileSize s where s.id = 1")
    public Double getValue();

    @Modifying
    @Transactional
    @Query("update MaxFileSize s set s.maxFileSize = ?1 where s.id = 1")
    public void setMaxSize(Double size);

}
