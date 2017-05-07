"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
var http_1 = require("@angular/http");
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./services/in-memory-data.service");
/*
  Rather than require a real API server,
  this example simulates communication with
  the remote server by adding
  the InMemoryWebApiModule to the module imports,
  effectively replacing the Http client's
  XHR backend service with an in-memory
  alternative.
*/
var app_component_1 = require("./app.component");
var quiz_component_1 = require("./quiz/quiz.component");
var take_quiz_component_1 = require("./quiz/take-quiz.component");
var quiz_service_1 = require("./services/quiz.service");
var quiz_detail_component_1 = require("./quiz/quiz-detail.component");
var take_quiz_detail_component_1 = require("./quiz/take-quiz-detail.component");
var app_routing_module_1 = require("./app-routing.module");
var shuffle_1 = require("./pipe/shuffle");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            app_routing_module_1.AppRoutingModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            quiz_component_1.QuizComponent,
            quiz_detail_component_1.QuizDetailComponent,
            take_quiz_component_1.TakeQuizComponent,
            take_quiz_detail_component_1.TakeQuizDetailComponent,
            shuffle_1.ShufflePipe
        ],
        providers: [quiz_service_1.QuizService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map