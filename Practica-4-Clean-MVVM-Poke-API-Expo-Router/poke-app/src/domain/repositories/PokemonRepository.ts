import Pokemon from "../entities/Pokemon";

export interface PokemonRepository {
    GetPokemons(limit: number): Promise<Pokemon[] | []>
    GetPokemonDescription(idPokemon: string, language: string): Promise<string>
}