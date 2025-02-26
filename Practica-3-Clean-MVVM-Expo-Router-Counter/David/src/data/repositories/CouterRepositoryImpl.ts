import { Counter } from "../../domain/entities/Couter";
import { CouterRepository } from "../../domain/repository/CouterRepository";

export class CouterRepositoryImpl implements CouterRepository {

    private counter: Counter = { value: 0 };

    async getValue(): Promise<Counter> {
        return this.counter;
    }

    async resetValue(): Promise<void> {
        this.counter = { value: 0 };
    }

    async addValue(value: number): Promise<void> {
        this.counter.value += value;
    }

    async subtractValue(value: number): Promise<void> {
        this.counter.value -= value;
    }
}