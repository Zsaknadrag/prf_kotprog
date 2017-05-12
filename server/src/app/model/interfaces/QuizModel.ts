import mongoose = require("mongoose");
import IQuestionModel = require('./QuestionModel');

interface QuizModel extends mongoose.Document {
    questions: string;
    name: string;
}

export = QuizModel;