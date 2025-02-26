import { CouterRepository } from "../../domain/repository/CouterRepository";

export class AddValueUseCase {
    constructor(
        private couterRepositoy: CouterRepository
    ) { }

    async execute(value: number): Promise<void> {
        this.couterRepositoy.addValue(value);
    }
}