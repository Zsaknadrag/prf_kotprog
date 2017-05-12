import IQuestionModel = require('./interfaces/IQuestionModel');
import IAnswerModel = require('./interfaces/IAnswerModel');

class QuestionModel {

  private _questionModel: IQuestionModel;

  constructor(questionModel: IQuestionModel) {
    this._questionModel = questionModel;
  }

  get text(): string {
    return this._questionModel.text;
  }

  get answers(): IAnswerModel {
    return this._questionModel.answers;
  }

}

Object.seal(QuestionModel);

export = QuestionModel;
