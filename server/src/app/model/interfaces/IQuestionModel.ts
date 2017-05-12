import mongoose = require("mongoose");
import IAnswerModel = require('./IAnswerModel');

interface IQuestionModel extends mongoose.Document {
  text: string;
  answers: IAnswerModel[];
}

export = IQuestionModel;
