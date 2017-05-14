import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { QuizesComponent }      from './components/quizes/quizes.component';
import { QuizDetailComponent }  from './components/quizDetail/quiz-detail.component';
import { NewQuestionComponent }  from './components/new-question/new-question.component';
import { TakeQuizComponent }  from './components/takeQuiz/takequiz.component';
import { ChooseQuizComponent }  from './components/choosequiz/choosequiz.component';
import { ToplistComponent }  from './components/toplist/toplist.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: QuizDetailComponent
  },
  {
    path: 'new-question/:quizId',
    component: NewQuestionComponent
  },
  {
    path: 'quizes',
    component: QuizesComponent
  },
  {
    path: 'takequiz/:id',
    component: TakeQuizComponent,
  },
  {
    path: 'choosequiz',
    component: ChooseQuizComponent,
  },
   {
    path: 'toplist',
    component: ToplistComponent
  },
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
