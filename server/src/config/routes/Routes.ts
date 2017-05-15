import express = require('express');
import path = require('path');

import QuizRoutes = require('../routes/QuizRoutes');
import UserRoutes = require('../routes/UserRoutes');

var app = express();

class Routes {

    constructor(private passport) { }

    get routes() {
        app.use("/", new QuizRoutes().routes);
        app.use("/", new UserRoutes(this.passport).routes);
        return app;
    }
}
export = Routes;
