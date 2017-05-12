import mongoose = require("mongoose");

interface IAnswerModel extends mongoose.Document {
  text: string;
  correct: boolean;
}

export = IAnswerModel;
