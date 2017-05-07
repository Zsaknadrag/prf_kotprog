import { Result } from './result';
export class User {
    id: number;
    username: string;
    password: string;
    isAdmin: boolean;
    results: Result[];
}
