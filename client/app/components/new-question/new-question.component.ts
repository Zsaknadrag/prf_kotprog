import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Quiz } from "../../models/quiz";
import { Question } from "../../models/question";
import { Answer } from "../../models/answer";
import { QuizService } from "../../services/quiz.service";

@Component({
  selector: 'new-question',
  templateUrl: './app/components/new-question/new-question.component.html',
  styleUrls: [ './app/components/new-question/new-question.component.css' ]
})
export class NewQuestionComponent implements OnInit {

  quiz: Quiz;
  question: Question;

  constructor(private router: Router, private route: ActivatedRoute, private quizService: QuizService) { }

  ngOnInit() {
    this.question = new Question();
    this.question.answers = [];
    for (var i = 0; i < 4; i++) {
      this.question.answers.push(new Answer());
    }

    this.route.params.forEach(obj => {
      if (obj.quizId) {
        this.quizService.getQuiz(obj.quizId).then(quiz => {
          this.quiz = quiz;
        });
      }
    });
  }

  save() {
    this.quiz.questions.push(this.question);

    this.quizService.save(this.quiz).then(quiz => {
      this.router.navigate(['/detail', quiz._id]);
    });
  }

}
