import { LoginUseCase } from "../../application/use_cases/auth/LoginUseCase";
import { LogoutUseCase } from "../../application/use_cases/auth/LogoutUseCase";
import { GetUserUseCase } from "../../application/use_cases/GetUserUseCase";
import { User } from "../../domain/entities/User";

export class AuthViewModel {

    user: User | null = null;

    constructor(
        private loginUseCase: LoginUseCase,
        private logoutUseCase: LogoutUseCase,
        private getUserUseCase: GetUserUseCase
    ) { }

    async login(email: string, password: string) {
        this.user = await this.loginUseCase.execute(email, password);
    }

    async logout() {
        await this.logoutUseCase.execute();
        this.user = null;
    }

    async loadUser() {
        this.user = await this.getUserUseCase.execute();
    }

    async getUser() {
        return this.user;
    }
}