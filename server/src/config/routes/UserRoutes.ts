import express = require("express");
import UserController = require("./../../controllers/UserController");

var router = express.Router();
class UserRoutes {
    private _userController: UserController;

    constructor (private passport) {
        this._userController = new UserController(passport);
    }
    get routes () {
        var controller = this._userController;

        var self = this;
        router.post("/login", function(req, res) {
          controller.login(req, res, self.passport);
        });

        router.get("/user", controller.retrieve);
        router.post("/user", controller.create);
        router.put("/user/:_id", controller.update);
        router.get("/user/:_id", controller.findById);
        router.delete("/user/:_id", controller.delete);

        return router;
    }


}

Object.seal(UserRoutes);
export = UserRoutes;
