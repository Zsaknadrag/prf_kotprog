import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Option, Question, Quiz } from '../models/index';
import { QuizService } from '../services/quiz.service';


@Component({
  selector: 'my-quizes',
  templateUrl: './quiz.component.html',
  styleUrls: [ './quiz.component.css' ]
})


export class QuizComponent implements OnInit {
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
    this.router.navigate(['/detail', this.selectedQuiz.id]);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.quizService.create(name)
      .then(quiz => {
        this.quizes.push(quiz);
        this.selectedQuiz = null;
      });
  }
  delete(quiz: Quiz): void {
    this.quizService
        .delete(quiz.id)
        .then(() => {
          this.quizes = this.quizes.filter(q => q !== quiz);
          if (this.selectedQuiz === quiz) { this.selectedQuiz = null; }
        });
  }


}



