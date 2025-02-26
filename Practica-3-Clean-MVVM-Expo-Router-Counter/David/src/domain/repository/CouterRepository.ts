import { Counter } from "../entities/Couter"

export interface CouterRepository {
    addValue(value: number): Promise<void>
    subtractValue(value: number): Promise<void>
    getValue(): Promise<Counter>
}