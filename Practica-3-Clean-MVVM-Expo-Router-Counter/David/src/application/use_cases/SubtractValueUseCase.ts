import { CouterRepository } from "../../domain/repository/CouterRepository";

export class SubtractValueUseCase {
    constructor(
        private couterRepositoy: CouterRepository
    ) { }

    async execute(value: number): Promise<void> {
        this.couterRepositoy.subtractValue(value);
    }
}