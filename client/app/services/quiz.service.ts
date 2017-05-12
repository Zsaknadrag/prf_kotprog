/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Injectable} from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Quiz} from "../models/quiz";

@Injectable()
export class QuizService {

    private quizUrl = 'api/quizes';  // URL to web api

    constructor(private http: Http) { }

    getQuizes(): Promise<Quiz[]> {
        return this.http.get(this.quizUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getQuiz(id: string) {
        return this.http.get(this.quizUrl + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    save(quiz: Quiz): Promise<Quiz>  {
        if (quiz._id) {
            return this.put(quiz);
        }
        return this.post(quiz);
    }

    private post(quiz: Quiz): Promise<Quiz> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.quizUrl, JSON.stringify(quiz), {headers:headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(quiz: Quiz) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.quizUrl}/${quiz._id}`;

        return this.http
            .put(url, JSON.stringify(quiz), {headers: headers})
            .toPromise()
            .then(() => quiz)
            .catch(this.handleError);
    }

    delete(quiz: Quiz) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.quizUrl}/${quiz._id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}