import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { QuizService } from '../services/quiz.service';
import { Option, Question, Quiz } from '../models/index';

@Component({
    selector: 'quiz-detail',
    templateUrl: './quiz-detail.component.html',
    styleUrls: [ './quiz-detail.component.css' ]
})

export class QuizDetailComponent implements OnInit{
    quiz: Quiz;
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
      question.options.forEach((x) => { if (x.id !== option.id) x.isAnswer = false; });
    }
    //TODO
    addq(quiz: Quiz, name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.quizService.createQuestion(quiz, name);
  }
}