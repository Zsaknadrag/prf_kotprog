import express = require("express");
import QuizController = require("./../../controllers/QuizController");

var router = express.Router();
class QuizRoutes {
    private _quizController: QuizController;

    constructor () {
        this._quizController = new QuizController();
    }
    get routes () {
        var controller = this._quizController;

        router.get("/quizes", controller.retrieve);
        router.post("/quizes", controller.create);
        router.put("/quizes/:_id", controller.update);
        router.get("/quizes/:_id", controller.findById);
        router.delete("/quizes/:_id", controller.delete);

        return router;
    }


}

Object.seal(QuizRoutes);
export = QuizRoutes;