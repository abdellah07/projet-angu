import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { AppRoutingModule } from './app.routing.module';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';
import { QuestionComponent } from './questions/question/question.component';
import { UserComponent } from './users/user/user.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { quizUser } from './quizzes/quizUser/quizUser.component';
import { AuthService } from 'src/services/auth.service';
import { AuthGuard } from 'src/services/auth-guard.service';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewQuestionComponent } from './questions/view-question/view-question.component';
import { ThemeComponent } from './theme/theme.component';
import { ViewQuizComponent } from './quizzes/view-quiz/view-quiz.component';
import { VocalQuizzComponent } from './quizzes/VocalQuiz/VocalQuiz.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent,
    HeaderComponent,
    QuizFormComponent,
    EditQuizComponent,
    QuestionListComponent,
    QuestionFormComponent,
    QuestionComponent,
    UserComponent,
    VocalQuizzComponent,
    UserFormComponent,
    UserListComponent,
    HomeComponent,
    ConfigurationComponent,
    quizUser,
    QuizQuestionComponent,
    HomeUserComponent,
    EditUserComponent,
    ViewQuestionComponent,
    ThemeComponent,
    ViewQuizComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
