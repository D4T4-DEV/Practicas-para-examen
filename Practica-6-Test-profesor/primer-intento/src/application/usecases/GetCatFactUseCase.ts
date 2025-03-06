import { CatFact } from "@/src/domain/entities/CatFact";
import { CatFactRepository } from "@/src/domain/repositories/CatFactRepository";

export class GetCatFactUseCase {
    constructor(
        private catFactRepository: CatFactRepository
    ) { }

    async execute(): Promise<CatFact | string> {
        return this.catFactRepository.getCatFact();
    }
}