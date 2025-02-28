import { User } from "../../domain/entities/User";

export class AuthLocalDataSource {
    private user: User | null = null;

    async login(email: string, password: string): Promise<User | null> {
        if (email === 'a@a.com' && password === 'a') {
            this.user = { id: '1', email, name: 'Tupu' };
            return this.user;
        }
        return null;
    }

    async logout(): Promise<void> {
        this.user = null;
    }

    async getUser(): Promise<User | null> {
        return this.user;
    }
}