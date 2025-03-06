import { CatFact } from "../entities/CatFact";

export interface CatFactRepository {
    getCatFact(): Promise<CatFact | string>
}