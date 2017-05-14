import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { QuizesComponent }      from './components/quizes/quizes.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { QuizDetailComponent }  from './components/quizDetail/quiz-detail.component';
import { NewQuestionComponent }  from './components/new-question/new-question.component';
import { TakeQuizComponent }  from './components/takeQuiz/takequiz.component';
import { ChooseQuizComponent }  from './components/choosequiz/choosequiz.component';
import { ToplistComponent }  from './components/toplist/toplist.component';
import { ShufflePipe } from './pipe/shuffle';

import { QuizService }  from './services/quiz.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
    ],
  declarations: [
    AppComponent,
    QuizesComponent,
    DashboardComponent,
    QuizDetailComponent,
    NewQuestionComponent,
    TakeQuizComponent,
    ChooseQuizComponent,
    ToplistComponent,
    ShufflePipe
  ],
  providers: [
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
