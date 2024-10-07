package com.careerFlow.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.careerFlow.dto.LoginDTO;
import com.careerFlow.dto.UserDTO;
import com.careerFlow.entity.User;
import com.careerFlow.exception.CareerFlowException;
import com.careerFlow.repository.UserRepository;
import com.careerFlow.utility.Utilities;

@Service(value="userService")
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder  passwordEncoder;
	
	@Override
	public UserDTO registerUser(UserDTO userDTO) throws CareerFlowException {
		
		Optional<User> optional = userRepository.findByEmail(userDTO.getEmail());
		if(optional.isPresent()) {
			throw new CareerFlowException("USER_FOUND");
		}
	
//		calls getNextSequence which increments the id by one and assign it to the incoming user
		userDTO.setId(Utilities.getNextSequence("users"));
		
//		encode password
		userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
		User user= userDTO.toEntity();
		user = userRepository.save(user);
		return user.toDTO();
	}

	@Override
	public UserDTO loginUser(LoginDTO loginDTO) throws CareerFlowException {
		User user = userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(()-> new CareerFlowException("USER_NOT_FOUND"));
		
		if(!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) {
			throw new CareerFlowException("INVALID_CREDENTIALS");
			
			
		}
		return user.toDTO();
	}

}
