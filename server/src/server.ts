/// <reference path="../typings/index.d.ts" />

import express = require('express');
import BaseRoutes = require("./config/routes/Routes");
import bodyParser = require("body-parser");
import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';
import * as expressSession from 'express-session';
import UserBusiness = require("./app/business/UserBusiness");
import IBaseController = require("./controllers/BaseController");
import IUserModel = require("./app/model/interfaces/IUserModel");

import path = require('path');
var port: number = process.env.PORT || 3000;
var env:string = process.env.NODE_ENV || 'developement';

var app = express();

app.set('port', port);

app.use('/app', express.static(path.resolve(__dirname, '../client/app')));
app.use('/libs', express.static(path.resolve(__dirname, '../client/libs')));

// for system.js to work. Can be removed if bundling.
app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.static(path.resolve(__dirname, '../../node_modules')));

passport.serializeUser((user, done) => {
    done(null, user.name);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use('login', new LocalStrategy.Strategy((username, password, done) => {
  var userBusiness = new UserBusiness();
  userBusiness.findByName(username, (error, result) => {
      if (result.password === password) {
        return done(null, result.name);
      } else {
        return done('ERROR', result.name);
      }
  });
}));

app.use(expressSession({secret: 'thegreatandsecretshow'}));
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use('/api', new BaseRoutes(passport).routes);

var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
}

app.get('/*', renderIndex);

if(env === 'developement'){
    app.use(function(err, req: express.Request, res: express.Response, next: express.NextFunction) {
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}


// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next) {
    let err = new Error("Not Found");
    next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

export { app }
