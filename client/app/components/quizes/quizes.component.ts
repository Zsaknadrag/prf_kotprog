import {Component, OnInit} from '@angular/core';
import {QuizService} from "../../services/quiz.service";
import {Quiz} from "../../models/quiz";
import { Router } from '@angular/router';

@Component({
    selector: 'my-quizes',
    templateUrl: './app/components/quizes/quizes.component.html',
    styleUrls: ['./app/components/quizes/quizes.component.css']
})

export class QuizesComponent implements OnInit {

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
        this.router.navigate(['/detail', quiz._id]);
    }

    addQuiz() {
        this.selectedQuiz = null;
        this.router.navigate(['/detail', 'new']);
    }

    addQuestion(quiz: Quiz) {
      this.router.navigate(['/new-question', quiz._id]);
    }

    deleteQuiz(quiz: Quiz, event: any) {
        event.stopPropagation();
        this.quizService
            .delete(quiz)
            .then(res => {
                this.quizes = this.quizes.filter(h => h !== quiz);
                if (this.selectedQuiz === quiz) { this.selectedQuiz = null; }
            })
            .catch(error => this.error = error);
    }
}
