import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template:  `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/quiz">Set Quizes</a>
        <a routerLink="/take">Take Quizes</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css'],
})

export class AppComponent{
    title = 'Quizes';
}