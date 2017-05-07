"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var quiz_component_1 = require("./quiz/quiz.component");
var quiz_detail_component_1 = require("./quiz/quiz-detail.component");
var take_quiz_component_1 = require("./quiz/take-quiz.component");
var take_quiz_detail_component_1 = require("./quiz/take-quiz-detail.component");
var routes = [
    { path: '', redirectTo: 'quiz', pathMatch: 'full' },
    { path: 'quiz', component: quiz_component_1.QuizComponent },
    { path: 'detail/:id', component: quiz_detail_component_1.QuizDetailComponent },
    { path: 'take', component: take_quiz_component_1.TakeQuizComponent },
    { path: 'takedetail/:id', component: take_quiz_detail_component_1.TakeQuizDetailComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map