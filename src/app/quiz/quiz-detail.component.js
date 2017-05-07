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
var QuizDetailComponent = (function () {
    function QuizDetailComponent(quizService, route, location) {
        this.quizService = quizService;
        this.route = route;
        this.location = location;
    }
    QuizDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.quizService.getQuiz(+params['id']); })
            .subscribe(function (quiz) { return _this.quiz = quiz; });
    };
    QuizDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    QuizDetailComponent.prototype.save = function () {
        this.quizService.update(this.quiz);
        // .then(() => this.goBack());
    };
    QuizDetailComponent.prototype.onSelect = function (question, option) {
        question.options.forEach(function (x) { if (x.id !== option.id)
            x.isAnswer = false; });
    };
    //TODO
    QuizDetailComponent.prototype.addq = function (quiz, name) {
        name = name.trim();
        if (!name) {
            return;
        }
        this.quizService.createQuestion(quiz, name);
    };
    return QuizDetailComponent;
}());
QuizDetailComponent = __decorate([
    core_1.Component({
        selector: 'quiz-detail',
        templateUrl: './quiz-detail.component.html',
        styleUrls: ['./quiz-detail.component.css']
    }),
    __metadata("design:paramtypes", [quiz_service_1.QuizService,
        router_1.ActivatedRoute,
        common_1.Location])
], QuizDetailComponent);
exports.QuizDetailComponent = QuizDetailComponent;
//# sourceMappingURL=quiz-detail.component.js.map