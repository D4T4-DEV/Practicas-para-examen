import { CatFactRepository } from "@/src/domain/repositories/CatFactRepository";
import { LocalStoragePlayerStatics } from "../datasources/LocalStorageStatics";
import { CatFact } from "@/src/domain/entities/CatFact";
import { GetCatFactApi } from "../services/ActionsCatFacts";
import { PlayerStatics } from "@/src/domain/entities/StaticsUser";

export class CatFactRepositoryImpl implements CatFactRepository {
    private localStoragePlayerStatics = new LocalStoragePlayerStatics();

    async getCatFact(): Promise<CatFact | string> {
        return await GetCatFactApi();
    }

    async getStaticsPlayer(): Promise<PlayerStatics> {
        return await this.localStoragePlayerStatics.getStaticsPlayer();
    }

    async savedStaticsPlayer(playerStatics: PlayerStatics): Promise<void> {
        await this.localStoragePlayerStatics.savedStaticsPlayer(playerStatics);
    }

    async clearAllStaticsPlayer(){
        await this.localStoragePlayerStatics.clearAllStaticsPlayer();
    }
}