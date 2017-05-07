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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var quiz_service_1 = require("../services/quiz.service");
var TakeQuizDetailComponent = (function () {
    function TakeQuizDetailComponent(quizService, route, location) {
        this.quizService = quizService;
        this.route = route;
        this.location = location;
    }
    TakeQuizDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.quizService.getQuiz(+params['id']); })
            .subscribe(function (quiz) { return _this.quiz = quiz; });
    };
    TakeQuizDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    TakeQuizDetailComponent.prototype.save = function () {
        this.quizService.update(this.quiz);
        // .then(() => this.goBack());
    };
    TakeQuizDetailComponent.prototype.onSelect = function (question, option) {
        question.options.forEach(function (x) { if (x.id !== option.id)
            x.selected = false; });
    };
    TakeQuizDetailComponent.prototype.isCorrect = function (question) {
        return question.options.every(function (x) { return x.selected === x.isAnswer; }) ? 1 : 0;
    };
    TakeQuizDetailComponent.prototype.showResult = function () {
        this.showres = true;
    };
    TakeQuizDetailComponent.prototype.evaluate = function (quiz) {
        var _this = this;
        var num = 0;
        var all = 0;
        quiz.questions.forEach(function (q) {
            num += _this.isCorrect(q);
            all += 1;
        });
        this.points = num;
        this.qnumber = all;
        this.showResult();
    };
    return TakeQuizDetailComponent;
}());
TakeQuizDetailComponent = __decorate([
    core_1.Component({
        selector: 'take-quiz-detail',
        templateUrl: './take-quiz-detail.component.html',
        styleUrls: ['./take-quiz-detail.component.css'],
    }),
    __metadata("design:paramtypes", [quiz_service_1.QuizService,
        router_1.ActivatedRoute,
        common_1.Location])
], TakeQuizDetailComponent);
exports.TakeQuizDetailComponent = TakeQuizDetailComponent;
//# sourceMappingURL=take-quiz-detail.component.js.map