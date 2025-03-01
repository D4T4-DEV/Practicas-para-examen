import Pokemon from "../../domain/entities/Pokemon";
import * as ActionsApi from "../services/ActionsPokeApi";

export class PokemonDataSource {
    private pokemons: Pokemon[] = [];

    async GetPokemons(limit: number): Promise<Pokemon[] | []> {
        return await ActionsApi.GetPokemons(limit);
    }

    async GetPokemonDescription(idPokemon: string, language: string): Promise<string> {
        return await ActionsApi.GetPokemonDescription(idPokemon, language);
    }

    async GetPokemonsFetched(): Promise<Pokemon[] | []> {
        return this.pokemons;
    }

}