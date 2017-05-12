import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { QuizesComponent }      from './components/quizes/quizes.component';
import { QuizDetailComponent }  from './components/quizDetail/quiz-detail.component';

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
    path: 'quizes',
    component: QuizesComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
