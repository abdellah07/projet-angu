import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { VocalQuizzComponent } from './quizzes/VocalQuiz/VocalQuiz.component';
import { quizUser } from './quizzes/quizUser/quizUser.component';
import { AuthGuard } from 'src/services/auth-guard.service';
import { ViewQuestionComponent } from './questions/view-question/view-question.component';
import { ViewQuizComponent } from './quizzes/view-quiz/view-quiz.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: 'user-list',
    canActivate: [AuthGuard],
    component: UserListComponent,
  },
  {
    path: 'quiz-list',
    canActivate: [AuthGuard],
    component: QuizListComponent,
  },
  {
    path: 'vocalQuizz',
    //canActivate: [AuthGuard],
    component: VocalQuizzComponent,
  },
  {
    path: 'edit-quiz/:id',
    canActivate: [AuthGuard],
    component: EditQuizComponent,
  },
  {
    path: 'edit-quiz/:id/:idQ',
    canActivate: [AuthGuard],
    component: ViewQuestionComponent,
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'configuration',
    canActivate: [AuthGuard],
    component: ConfigurationComponent,
  },
  {
    path: 'quizUser',
    canActivate: [AuthGuard],
    component: quizUser,
  },
  {
    path: 'view/:id',
    canActivate: [AuthGuard],
    component: ViewQuizComponent,
  },
  {
    path: 'user/:id',
    canActivate: [AuthGuard],
    component: UserDetailComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
