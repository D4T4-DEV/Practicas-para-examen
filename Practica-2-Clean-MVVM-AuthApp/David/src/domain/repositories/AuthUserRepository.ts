import { User } from "../entities/User";

export interface AuthUserRepository {
    login(email: string, password: string): Promise<User | null>
    logout(): Promise<void>
    getUser(): Promise<User | null>
}