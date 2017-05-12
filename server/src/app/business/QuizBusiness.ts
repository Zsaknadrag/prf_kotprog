import QuizRepository = require("./../repository/QuizRepository");
import IQuizBusiness = require("./interfaces/QuizBusiness");
import IQuizModel = require("./../model/interfaces/QuizModel");
import QuizModel = require("./../model/QuizModel");

class QuizBusiness implements IQuizBusiness {
  private _quizRepository: QuizRepository;

  constructor () {
    this._quizRepository = new QuizRepository();
  }

  create(item: IQuizModel, callback: (error: any, result: any) => void) {
    this._quizRepository.create(item, callback);
  }

  retrieve(callback: (error: any, result: any) => void) {
    this._quizRepository.retrieve(callback);
  }

  update(_id: string, item: IQuizModel, callback: (error: any, result: any) => void) {
    this._quizRepository.findById(_id, (err, res) => {
      if(err) {
        callback(err, res);
      } else {
        this._quizRepository.update(res._id, item, callback);
      }
    });
  }

  delete(_id: string, callback:(error: any, result: any) => void) {
    this._quizRepository.delete(_id , callback);
  }

  findById(_id: string, callback: (error: any, result: IQuizModel) => void) {
    this._quizRepository.findById(_id, callback);
  }

}

Object.seal(QuizBusiness);

export = QuizBusiness;
