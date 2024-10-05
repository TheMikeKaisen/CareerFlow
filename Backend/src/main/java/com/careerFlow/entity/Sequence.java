package com.careerFlow.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

// Sequence collection in the database would keep the score of id that each collection would have. Each time a user is created the id is incremented by 1. In sequence collection, id refers to the name of other collections and seq refers to the latest id of that collection.
@Data
@Document(collection="sequence")
public class Sequence {
	
	@Id
	private String id;
	private Long seq;
}
