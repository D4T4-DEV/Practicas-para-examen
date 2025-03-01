import Pokemon from "../../domain/entities/Pokemon";
import { PokemonRepository } from "../../domain/repositories/PokemonRepository";

export class GetPokemonDescriptionUseCase {
    constructor(
        private pokemonRepository: PokemonRepository,
    ) { }

    async execute(idPokemon: string, language: string): Promise<string> {
        return this.pokemonRepository.GetPokemonDescription(idPokemon, language);
    }
}