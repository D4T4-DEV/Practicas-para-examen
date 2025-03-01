import Pokemon from "../../domain/entities/Pokemon";
import { PokemonRepository } from "../../domain/repositories/PokemonRepository";

export class GetPokemonsUseCase {
    constructor(
        private pokemonRepository: PokemonRepository,
    ) { }

    async execute(limit: number): Promise<Pokemon[] | []> {
        return this.pokemonRepository.GetPokemons(limit);
    }
}