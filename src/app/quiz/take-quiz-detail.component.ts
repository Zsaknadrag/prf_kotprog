import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { QuizService } from '../services/quiz.service';
import { Option, Question, Quiz } from '../models/index';
import { ShufflePipe } from '../pipe/shuffle';

@Component({
    selector: 'take-quiz-detail',
    templateUrl: './take-quiz-detail.component.html',
    styleUrls: [ './take-quiz-detail.component.css' ],
})

export class TakeQuizDetailComponent implements OnInit{
    quiz: Quiz;
    qnumber: number;
    showres: boolean;
    points: number;
    constructor(
        private quizService: QuizService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => this.quizService.getQuiz(+params['id']))
        .subscribe(quiz => this.quiz = quiz);
    }
    goBack(): void {
    this.location.back();
    }
    save(): void {
    this.quizService.update(this.quiz);
        // .then(() => this.goBack());
    }
    onSelect(question: Question, option: Option) {
      question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
    }
     isCorrect(question: Question): number {
        return question.options.every(x => x.selected === x.isAnswer) ? 1 : 0;
    }
    showResult() {
        this.showres = true;
    }
    evaluate(quiz: Quiz) {
        let num = 0;
        let all = 0;
        quiz.questions.forEach((q) => {
            num += this.isCorrect(q);
            all += 1;
        });
        this.points =  num;
        this.qnumber = all;
        this.showResult();
    }
}