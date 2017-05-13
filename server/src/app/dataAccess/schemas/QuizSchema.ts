import DataAccess = require('../DataAccess');
import IQuizModel = require("./../../model/interfaces/QuizModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class QuizSchema {

  static get schema() {
    var schema = mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      questions: [{
        text: String,
        answers: [{
          text: String,
          correct: Boolean,
          selected: Boolean
        }]
      }]
    });

    return schema;
  }

}

var schema = mongooseConnection.model<IQuizModel>("Quizes", QuizSchema.schema);

export = schema;
