import DataAccess = require('../DataAccess');
import IQuizModel = require("./../../model/interfaces/QuizModel");

import QuestionSchema = require('./QuestionSchema');

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class QuizSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            name : {
                type: String,
                required: true
            },
            questions: {
                type: String,
                required: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IQuizModel>("Quizes", QuizSchema.schema);
export = schema;""