import { CouterRepository } from "../../domain/repository/CouterRepository";

export class ResetValueUseCase {
    constructor(
        private couterRepositoy: CouterRepository
    ) { }

    async execute(): Promise<void> {
        this.couterRepositoy.resetValue();
    }
}