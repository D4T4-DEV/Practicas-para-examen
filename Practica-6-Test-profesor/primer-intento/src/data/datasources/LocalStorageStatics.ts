
import { PlayerStatics } from "@/src/domain/entities/StaticsUser";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class LocalStoragePlayerStatics {

    async getStaticsPlayer() {
        const staticsPlayer = await AsyncStorage.getItem('PlayerStatics');
        return staticsPlayer ? JSON.parse(staticsPlayer) : [];
    }

    async savedStaticsPlayer(playerStatics: PlayerStatics) {
        await AsyncStorage.setItem('PlayerStatics', JSON.stringify(playerStatics));
    }

    async clearAllStaticsPlayer(){
        await AsyncStorage.removeItem('PlayerStatics');
    }
}