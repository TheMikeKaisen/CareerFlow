package com.careerFlow.service;

import com.careerFlow.dto.LoginDTO;
import com.careerFlow.dto.UserDTO;
import com.careerFlow.exception.CareerFlowException;

import jakarta.validation.Valid;

public interface UserService {
	public UserDTO registerUser(UserDTO userDTO) throws CareerFlowException;

	public UserDTO loginUser(LoginDTO loginDTO) throws CareerFlowException;
	
}
