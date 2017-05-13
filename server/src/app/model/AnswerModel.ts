import IAnswerModel = require('./interfaces/IAnswerModel');

class AnswerModel {

  private _answerModel: IAnswerModel;

  constructor(answerModel: IAnswerModel) {
    this._answerModel = answerModel;
  }

  get text(): string {
    return this._answerModel.text;
  }

  get correct(): boolean {
    return this._answerModel.correct;
  }

  get selected(): boolean {
    return this._answerModel.selected;
  }

}

Object.seal(AnswerModel);

export = AnswerModel;
