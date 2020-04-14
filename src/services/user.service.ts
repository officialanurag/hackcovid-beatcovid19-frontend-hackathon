import { IUser } from './interfaces';

export class User {
    private readonly API_URL: string;

    constructor () {
        this.API_URL = '/users';
    }

    async register (
        createUser: IUser
    ): Promise<IUser> {
        return {
            full_name: '',
            phone: 0,
            email: '',
            password: '',
            adhaar_id: 0,
            created_at: new Date()
        };
    }
}