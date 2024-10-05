package com.careerFlow.dto;

import com.careerFlow.entity.User;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor // creates no argument constructor
@AllArgsConstructor 
public class UserDTO {
	
	private Long id;
	
	@NotBlank(message="{user.name.absent}")
	private String name;
	
	@NotNull(message="{user.email.absent}")
	@Email(message="{user.email.invalid}")
	private String email;
	
	@NotNull(message="{user.password.absent")
	@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,15}$", message="{user.password.invalid}")
	private String password;
	
	private AccountType accountType;
	
	public User toEntity() {
		return new User(this.id, this.name, this.email,this.password, this.accountType);
	}
}
