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
var QuizComponent = (function () {
    function QuizComponent(quizService, router) {
        this.quizService = quizService;
        this.router = router;
    }
    QuizComponent.prototype.onSelect = function (quiz) {
        this.selectedQuiz = quiz;
    };
    QuizComponent.prototype.ngOnInit = function () {
        this.getQuizes();
    };
    QuizComponent.prototype.getQuizes = function () {
        var _this = this;
        this.quizService.getQuizes().then(function (quizes) { return _this.quizes = quizes; });
    };
    QuizComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedQuiz.id]);
    };
    QuizComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.quizService.create(name)
            .then(function (quiz) {
            _this.quizes.push(quiz);
            _this.selectedQuiz = null;
        });
    };
    QuizComponent.prototype.delete = function (quiz) {
        var _this = this;
        this.quizService
            .delete(quiz.id)
            .then(function () {
            _this.quizes = _this.quizes.filter(function (q) { return q !== quiz; });
            if (_this.selectedQuiz === quiz) {
                _this.selectedQuiz = null;
            }
        });
    };
    return QuizComponent;
}());
QuizComponent = __decorate([
    core_1.Component({
        selector: 'my-quizes',
        templateUrl: './quiz.component.html',
        styleUrls: ['./quiz.component.css']
    }),
    __metadata("design:paramtypes", [quiz_service_1.QuizService,
        router_1.Router])
], QuizComponent);
exports.QuizComponent = QuizComponent;
//# sourceMappingURL=quiz.component.js.map