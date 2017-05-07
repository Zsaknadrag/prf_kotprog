import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Option, Question, Quiz } from '../models/index';
import { QuizService } from '../services/quiz.service';


@Component({
  selector: 'my-quizes',
  templateUrl: './take-quiz.component.html',
  styleUrls: [ './take-quiz.component.css' ]
})


export class TakeQuizComponent implements OnInit {
  quizes: Quiz[];
  selectedQuiz: Quiz;
  onSelect(quiz: Quiz): void {
    this.selectedQuiz = quiz;
  }
  constructor(
    private quizService: QuizService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.getQuizes();
  }
  getQuizes(): void {
     this.quizService.getQuizes().then(quizes => this.quizes = quizes);
  }
  gotoDetail(): void {
    this.router.navigate(['/takedetail', this.selectedQuiz.id]);
  }
}



