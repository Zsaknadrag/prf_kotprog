import express = require('express');
import path = require('path');

import QuizRoutes = require('../routes/QuizRoutes');

var app = express();

class Routes {

    get routes() {
        app.use("/", new QuizRoutes().routes);
        return app;
    }
}
export = Routes;