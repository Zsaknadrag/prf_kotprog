import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from "../../models/quiz";
import { Question } from '../../models/question';
import { Answer } from '../../models/answer';
import { ActivatedRoute, Params } from '@angular/router';
import {QuizService} from "../../services/quiz.service";
import { Router } from '@angular/router';
@Component({
    selector: 'my-takequiz',
    templateUrl: './app/components/takeQuiz/takequiz.component.html',
    styleUrls: [ './app/components/takeQuiz/takequiz.component.css' ]
})

export class TakeQuizComponent implements OnInit {
    @Input() quiz: Quiz;
    error: any;
    navigated = false; // true if navigated here
    qnumber: number;
    showres: boolean;
    points: number;

    constructor(
        private quizService: QuizService,
        private route: ActivatedRoute,
        private router: Router,) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.quizService.getQuiz(id)
                .then(quiz => {
                    this.quiz = quiz;
                    this.initSelected();
                });
            
        });
    }
    initSelected(){
        this.quiz.questions.forEach(x => {
            x.answers.forEach(y => {
                y.selected=false;
            })
        });
    }

    save() {
        this.quizService
            .save(this.quiz)
            .then(quiz => {
                this.quiz = quiz; 
            })
            .catch(error => this.error = error); 
    }

    goBack() {
        window.history.back();
    }


     onSelect(question: Question, answer: Answer) {
      question.answers.forEach((x) => { 
          if (x._id !== answer._id) x.selected = false; 
          else x.selected = true;
        });
        this.save();
    }

    isCorrect(question: Question): number {
        return question.answers.every(x => x.selected === x.correct) ? 1 : 0;
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
