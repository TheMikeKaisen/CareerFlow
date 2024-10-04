package com.careerFlow.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.careerFlow.entity.User;

public interface UserRepository extends MongoRepository<User, String>{

}
