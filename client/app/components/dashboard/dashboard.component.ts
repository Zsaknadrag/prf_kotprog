import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Quiz} from "../../models/quiz";
import {QuizService} from "../../services/quiz.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html',
    styleUrls: ['./app/components/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    quizes: Quiz[] = [];

    constructor(
        private router: Router,
        private quizService: QuizService) {
    }

    ngOnInit() {
        this.quizService.getQuizes()
            .then(quizes => this.quizes = quizes);
    }

    gotoDetail(quiz: Quiz) {
        let link = ['/detail', quiz._id];
        this.router.navigate(link);
    }
}