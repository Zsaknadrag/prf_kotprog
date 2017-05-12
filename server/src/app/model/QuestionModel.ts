import IQuestionModel = require('./interfaces/QuestionModel');

class QuestionModel {

    private _questionModel: IQuestionModel;

    constructor(questionModel: IQuestionModel) {
        this._questionModel = questionModel;
    }
    get name (): string {
        return this._questionModel.name;
    }
}
Object.seal(QuestionModel);
export =  QuestionModel;