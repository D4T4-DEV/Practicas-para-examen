import Pokemon from "../../domain/entities/Pokemon";
import { PokemonRepository } from "../../domain/repositories/PokemonRepository";

export class GetPokemonsFetchedUseCase {
    constructor(
        private pokemonRepository: PokemonRepository,
    ) { }

    async execute(): Promise<Pokemon[] | []> {
        return this.pokemonRepository.GetPokemonsFetched();
    }
}