import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from "../../models/quiz";
import { Question } from '../../models/question';
import { Answer } from '../../models/answer';
import { ActivatedRoute, Params } from '@angular/router';
import {QuizService} from "../../services/quiz.service";
import { Router } from '@angular/router';
@Component({
    selector: 'my-quiz-detail',
    templateUrl: './app/components/quizDetail/quiz-detail.component.html',
    styleUrls: [ './app/components/quizDetail/quiz-detail.component.css' ]
})

export class QuizDetailComponent implements OnInit {
    @Input() quiz: Quiz;
    newQuiz = false;
    error: any;
    navigated = false; // true if navigated here


    constructor(
        private quizService: QuizService,
        private route: ActivatedRoute,
        private router: Router,) {
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
                this.quiz = quiz; 
                this.router.navigate(['/quizes']);
            })
            .catch(error => this.error = error); 
    }

    goBack() {
        window.history.back();
    }

    addQuestion(quiz: Quiz) {
      this.router.navigate(['/new-question', quiz._id]);
    }

     onSelect(question: Question, answer: Answer) {
      question.answers.forEach((x) => { 
          if (x._id !== answer._id) x.correct = false;
        });
    }
}
