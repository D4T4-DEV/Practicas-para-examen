import { User } from "../../../domain/entities/User";
import { AuthUserRepository } from "../../../domain/repositories/AuthUserRepository";

export class LoginUseCase {
    constructor(
        private authUserRepository: AuthUserRepository
    ) { }

    async execute(email: string, password: string): Promise<User | null> {
        return this.authUserRepository.login(email, password);
    }
}