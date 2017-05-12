import QuizModel = require("./../model/QuizModel");
import IQuizModel = require("./../model/interfaces/QuizModel");
import QuizSchema = require("./../dataAccess/schemas/QuizSchema");
import RepositoryBase = require("./BaseRepository");

class QuizRepository  extends RepositoryBase<IQuizModel> {
    constructor () {
        super(QuizSchema);
    }
}

Object.seal(QuizRepository);
export = QuizRepository;