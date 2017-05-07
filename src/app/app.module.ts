import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
/*
  Rather than require a real API server, 
  this example simulates communication with 
  the remote server by adding 
  the InMemoryWebApiModule to the module imports, 
  effectively replacing the Http client's 
  XHR backend service with an in-memory 
  alternative.
*/
import { AppComponent }  from './app.component';
import { QuizComponent }  from './quiz/quiz.component';
import { TakeQuizComponent }  from './quiz/take-quiz.component';
import { QuizService} from './services/quiz.service';
import { QuizDetailComponent } from './quiz/quiz-detail.component';
import { TakeQuizDetailComponent }  from './quiz/take-quiz-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { ShufflePipe } from './pipe/shuffle';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    QuizComponent,
    QuizDetailComponent,
    TakeQuizComponent,
    TakeQuizDetailComponent,
    ShufflePipe
  ],
  providers: [ QuizService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
