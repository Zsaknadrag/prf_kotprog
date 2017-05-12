import mongoose = require("mongoose");

interface QuestionModel extends mongoose.Document {
    name: string;
}

export = QuestionModel;