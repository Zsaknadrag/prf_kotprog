/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from "../../models/quiz";
import { ActivatedRoute, Params } from '@angular/router';
import {QuizService} from "../../services/quiz.service";

@Component({
    selector: 'my-quiz-detail',
    templateUrl: './app/components/quizDetail/quiz-detail.component.html'
})

export class QuizDetailComponent implements OnInit {
    @Input() quiz: Quiz;
    newQuiz = false;
    error: any;
    navigated = false; // true if navigated here


    constructor(
        private quizService: QuizService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if (id === 'new') {
                this.newQuiz = true;
                this.quiz = new Quiz();
            } else {
                this.newQuiz = false;
                this.quizService.getQuiz(id)
                    .then(quiz => this.quiz = quiz);
            }
        });
    }

    save() {
        this.quizService
            .save(this.quiz)
            .then(quiz => {
                this.quiz = quiz; // saved hero, w/ id if new
                this.goBack();
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack() {
        window.history.back();
    }
}