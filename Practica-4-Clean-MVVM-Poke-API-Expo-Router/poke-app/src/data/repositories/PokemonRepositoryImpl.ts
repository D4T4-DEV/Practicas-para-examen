import Pokemon from "../../domain/entities/Pokemon";
import { PokemonRepository } from "../../domain/repositories/PokemonRepository";
import { PokemonDataSource } from "../datasources/PokemonDataSource";

export class PokemonRepositoryImpl implements PokemonRepository {
    constructor(
        private pokemonDataSource: PokemonDataSource,
    ) { }

    async GetPokemons(limit: number): Promise<Pokemon[] | []> {
        return await this.pokemonDataSource.GetPokemons(limit);
    }

    async GetPokemonDescription(idPokemon: string, language: string): Promise<string> {
        return await this.pokemonDataSource.GetPokemonDescription(idPokemon, language);
    }

    async GetPokemonsFetched(): Promise<Pokemon[] | []> {
        return await this.pokemonDataSource.GetPokemonsFetched();
    }
}