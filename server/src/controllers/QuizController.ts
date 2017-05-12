import express = require("express");
import QuizBusiness = require("./../app/business/QuizBusiness");
import IBaseController = require("./BaseController");
import IQuizModel = require("./../app/model/interfaces/QuizModel");

class QuizController implements IBaseController <QuizBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var quiz: IQuizModel = <IQuizModel>req.body;
            var quizBusiness = new QuizBusiness();
            quizBusiness.create(quiz, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var quiz: IQuizModel = <IQuizModel>req.body;
            var _id: string = req.params._id;
            var quizBusiness = new QuizBusiness();
            quizBusiness.update(_id, quiz, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var quizBusiness = new QuizBusiness();
            quizBusiness.delete(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {

            var quizBusiness = new QuizBusiness();
            quizBusiness.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var quizBusiness = new QuizBusiness();
            quizBusiness.findById(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
export = QuizController;