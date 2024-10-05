package com.careerFlow.service;

import com.careerFlow.dto.UserDTO;
import com.careerFlow.exception.CareerFlowException;

public interface UserService {
	public UserDTO registerUser(UserDTO userDTO) throws CareerFlowException;
	
}
