package com.careerFlow.utility;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import com.careerFlow.entity.Sequence;
import com.careerFlow.exception.CareerFlowException;

@Component
public class Utilities {
	
	private static MongoOperations mongoOperation;
	
	@Autowired
	public void setMongoOperations(MongoOperations mongoOperation) {
		Utilities.mongoOperation = mongoOperation;
	}
	public static Long getNextSequence(String key) throws CareerFlowException {
//		create a query command
		Query query = new Query(Criteria.where("_id").is(key));
		
//		increment sequence by 1
		Update update = new Update();
		update.inc("seq", 1);
		
//		return the result
		FindAndModifyOptions options = new FindAndModifyOptions();
		options.returnNew(true);
		
//		executing the query
		Sequence seq = mongoOperation.findAndModify(query, update, options, Sequence.class);
		
		if(seq==null) throw new CareerFlowException("Unable to get sequence id for key : " + key);
		return seq.getSeq();
				
	}
}
