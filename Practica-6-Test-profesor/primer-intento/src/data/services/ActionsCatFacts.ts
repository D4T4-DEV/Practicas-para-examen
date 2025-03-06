import CatFactInstanceApi from "@/src/configs/CatFactInstance";
import { CatFact } from "@/src/domain/entities/CatFact";

export async function GetCatFactApi(): Promise<CatFact | string> {
    try {
        const response = await CatFactInstanceApi.get('/fact');
        const dataProcess: CatFact = {
            'fact': response.data.fact,
            'isAFact': Math.random() >= 0.5 // true //Math.random() >= 0.5
        }
        return dataProcess;
    } catch (error) {
        console.error('Error al obtener los factos de la api', error);
        return '';
    }
}