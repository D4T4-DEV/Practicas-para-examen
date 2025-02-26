import { Counter } from "../../domain/entities/Couter";
import { CouterRepository } from "../../domain/repository/CouterRepository";

export class GetValueUseCase {
    constructor(
        private couterRepositoy: CouterRepository
    ) { }

    async execute(): Promise<Counter> {
        return this.couterRepositoy.getValue();
    }
}