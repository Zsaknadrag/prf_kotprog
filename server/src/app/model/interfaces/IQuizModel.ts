import mongoose = require("mongoose");
import IQuestionModel = require('./IQuestionModel');

interface IQuizModel extends mongoose.Document {
  name: string;
  questions: IQuestionModel[];
}

export = IQuizModel;
