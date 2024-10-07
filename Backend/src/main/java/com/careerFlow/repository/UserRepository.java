package com.careerFlow.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.careerFlow.entity.User;

public interface UserRepository extends MongoRepository<User, Long>{
//	May or may not return the email passed in the function.
	public Optional<User> findByEmail(String email);
}
