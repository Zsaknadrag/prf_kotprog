"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var QuizService = (function () {
    function QuizService(http) {
        this.http = http;
        this.quizUrl = 'api/quizes'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    QuizService.prototype.getQuizes = function () {
        return this.http.get(this.quizUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    QuizService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    QuizService.prototype.getQuiz = function (id) {
        var url = this.quizUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    QuizService.prototype.update = function (quiz) {
        var url = this.quizUrl + "/" + quiz.id;
        return this.http
            .put(url, JSON.stringify(quiz), { headers: this.headers })
            .toPromise()
            .then(function () { return quiz; })
            .catch(this.handleError);
    };
    QuizService.prototype.create = function (name) {
        return this.http
            .post(this.quizUrl, JSON.stringify({ name: name, questions: [] }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    QuizService.prototype.delete = function (id) {
        var url = this.quizUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    // TODO
    QuizService.prototype.createQuestion = function (quiz, name) {
        var id = quiz.id;
        var url = this.quizUrl + "/" + id;
        return this.http
            .post(url, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    return QuizService;
}());
QuizService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], QuizService);
exports.QuizService = QuizService;
//# sourceMappingURL=quiz.service.js.map