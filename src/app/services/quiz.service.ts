import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Option, Question, Quiz } from '../models/index';

@Injectable()
export class QuizService {
    private quizUrl = 'api/quizes';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) { }
    getQuizes(): Promise<Quiz[]> {
        return this.http.get(this.quizUrl)
                .toPromise()
                .then(response => response.json().data as Quiz[])
                .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getQuiz(id: number): Promise<Quiz> {
        const url = `${this.quizUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Quiz)
            .catch(this.handleError);
    }

    update(quiz: Quiz): Promise<Quiz> {
    const url = `${this.quizUrl}/${quiz.id}`;
    return this.http
        .put(url, JSON.stringify(quiz), {headers: this.headers})
        .toPromise()
        .then(() => quiz)
        .catch(this.handleError);
    }

    create(name: string): Promise<Quiz> {
    return this.http
        .post(this.quizUrl, JSON.stringify({name: name, questions: [] }), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Quiz)
        .catch(this.handleError);
    }
    delete(id: number): Promise<void> {
    const url = `${this.quizUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
    // TODO
    createQuestion(quiz: Quiz, name: string): Promise<Question> {
    const id = quiz.id;
    const url = `${this.quizUrl}/${id}`;
    return this.http
        .post(url, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Question)
        .catch(this.handleError);
    }
}
