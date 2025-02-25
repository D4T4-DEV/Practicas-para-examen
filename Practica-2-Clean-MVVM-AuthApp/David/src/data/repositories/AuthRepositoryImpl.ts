import { User } from "../../domain/entities/User";
import { AuthUserRepository } from "../../domain/repositories/AuthUserRepository";
import { AuthLocalDataSource } from "../datasources/AuthLocalDataSource";

export class AuthUserRepositoryImpl implements AuthUserRepository {
    constructor(private authLocalDataSource: AuthLocalDataSource) {}

    async login(email: string, password: string): Promise<User | null> {
        return this.authLocalDataSource.login(email, password);
    }

    async logout(): Promise<void> {
        this.authLocalDataSource.logout();
    }

    async getUser(): Promise<User | null> {
        return this.authLocalDataSource.getUser();
    }
}