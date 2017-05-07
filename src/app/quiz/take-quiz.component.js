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
var quiz_service_1 = require("../services/quiz.service");
var TakeQuizComponent = (function () {
    function TakeQuizComponent(quizService, router) {
        this.quizService = quizService;
        this.router = router;
    }
    TakeQuizComponent.prototype.onSelect = function (quiz) {
        this.selectedQuiz = quiz;
    };
    TakeQuizComponent.prototype.ngOnInit = function () {
        this.getQuizes();
    };
    TakeQuizComponent.prototype.getQuizes = function () {
        var _this = this;
        this.quizService.getQuizes().then(function (quizes) { return _this.quizes = quizes; });
    };
    TakeQuizComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/takedetail', this.selectedQuiz.id]);
    };
    return TakeQuizComponent;
}());
TakeQuizComponent = __decorate([
    core_1.Component({
        selector: 'my-quizes',
        templateUrl: './take-quiz.component.html',
        styleUrls: ['./take-quiz.component.css']
    }),
    __metadata("design:paramtypes", [quiz_service_1.QuizService,
        router_1.Router])
], TakeQuizComponent);
exports.TakeQuizComponent = TakeQuizComponent;
//# sourceMappingURL=take-quiz.component.js.map