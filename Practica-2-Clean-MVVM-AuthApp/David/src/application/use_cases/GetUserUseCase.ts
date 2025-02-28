import { User } from "../../domain/entities/User";
import { AuthUserRepository } from "../../domain/repositories/AuthUserRepository";


export class GetUserUseCase {
    constructor(
        private authUserRepository: AuthUserRepository
    ) {}

    async execute(): Promise<User | null>{
        return await this.authUserRepository.getUser();
    }
}