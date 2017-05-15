import IQuizModel = require('./interfaces/IQuizModel');
import IQuestionModel = require('./interfaces/IQuestionModel');

class QuizModel {

  private _quizModel: IQuizModel;

  constructor(quizModel: IQuizModel) {
    this._quizModel = quizModel;
  }

  get name(): string {
    return this._quizModel.name;
  }

  get questions(): string {
    return this._quizModel.questions;
  }

}

Object.seal(QuizModel);

export = QuizModel;
