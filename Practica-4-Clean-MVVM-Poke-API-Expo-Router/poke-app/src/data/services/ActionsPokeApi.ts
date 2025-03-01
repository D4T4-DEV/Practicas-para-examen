import Poke_API from "../../configurations/PokeApi";
import Pokemon from "../../domain/entities/Pokemon";

interface DataPokemon {
    name: string;
    url: string;
}

interface FlavorTextEntry {
    flavor_text: string;
    language: { name: string };
}

interface PokemonSpeciesResponse {
    flavor_text_entries: FlavorTextEntry[];
}

export async function GetPokemons(limit: number): Promise<Pokemon[] | []> {
    try {
        const response = await Poke_API.get(`pokemon/?offset=${limit}&limit=${limit}`);
        const dataPokemon: DataPokemon[] = response.data.results;

        return dataPokemon.map((pokemon: DataPokemon) => {
            // Obtiene el ID basandose en esto 'https://pokeapi.co/api/v2/pokemon/1/'
            const pokemonID = pokemon.url.split("/").slice(-2, -1)[0];
            return {
                id: pokemonID,
                name: pokemon.name,
                url_image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`,
            }
        });

    } catch (error) {
        console.error(`Error when obtaining pokemons, using the limit ${limit}`);
        return [];
    }
}

export async function GetPokemonDescription(idPokemon: string, language: string): Promise<string> {
    try {
        const response = await Poke_API.get<PokemonSpeciesResponse>(`pokemon-species/${idPokemon}/`);
        const descriptions = response.data.flavor_text_entries;

        const entry = descriptions.find((entry) => entry.language.name === language);
        return entry?.flavor_text.replace(/[\n\f]/g, " ") || 'Description not found';

    } catch (error) {
        console.error(`Error al obtener la descripción del Pokémon ${idPokemon}:`, error);
        return 'An error occurred while getting the description';
    }
}