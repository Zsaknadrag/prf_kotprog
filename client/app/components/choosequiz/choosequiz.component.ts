import {Component, OnInit} from '@angular/core';
import {QuizService} from "../../services/quiz.service";
import {Quiz} from "../../models/quiz";
import { Router } from '@angular/router';

@Component({
    selector: 'choosequiz',
    templateUrl: './app/components/choosequiz/choosequiz.component.html',
    styleUrls: ['./app/components/choosequiz/choosequiz.component.css']
})

export class ChooseQuizComponent implements OnInit {

    quizes: Quiz[];
    selectedQuiz: Quiz;
    error: any;

    constructor(
        private router: Router,
        private quizService: QuizService) { }
    getQuizes() {
        this.quizService.getQuizes().then(quizes => this.quizes = quizes);
    }
    ngOnInit() {
        this.getQuizes();
    }
    onSelect(quiz: Quiz) { this.selectedQuiz = quiz; }

    gotoDetail(quiz: Quiz) {
        this.router.navigate(['/takequiz', quiz._id]);
    }
}
