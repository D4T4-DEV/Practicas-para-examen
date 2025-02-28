import { AuthUserRepository } from "../../../domain/repositories/AuthUserRepository";

export class LogoutUseCase {
    constructor(
        private authUserRepository: AuthUserRepository
    ) {}

    async execute(): Promise<void>{
        await this.authUserRepository.logout();
    }
}