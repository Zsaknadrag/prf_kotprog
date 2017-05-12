import { Answer } from './answer';

export class Question {
  _id: number;
  text: string;
  answers: Answer[];
}
