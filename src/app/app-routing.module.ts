import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent }   from './quiz/quiz.component';
import { QuizDetailComponent }  from './quiz/quiz-detail.component';
import { TakeQuizComponent }  from './quiz/take-quiz.component';
import { TakeQuizDetailComponent }  from './quiz/take-quiz-detail.component';
const routes: Routes = [
  { path: '', redirectTo: 'quiz', pathMatch: 'full' },
  { path: 'quiz',  component: QuizComponent },
  { path: 'detail/:id', component: QuizDetailComponent },
  { path: 'take', component: TakeQuizComponent },
  { path: 'takedetail/:id', component: TakeQuizDetailComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
