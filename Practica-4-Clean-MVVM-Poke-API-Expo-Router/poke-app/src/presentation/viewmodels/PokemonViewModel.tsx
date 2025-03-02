import React, { createContext, useContext, useState } from 'react'
import { PokemonRepositoryImpl } from '../../data/repositories/PokemonRepositoryImpl';
import { PokemonDataSource } from '../../data/datasources/PokemonDataSource';
import Pokemon from '../../domain/entities/Pokemon';
import { GetPokemonsUseCase } from '../../application/usecases/GetPokemons';
import { GetPokemonDescriptionUseCase } from '../../application/usecases/GetPokemonDescriptionUseCase';
import { GetPokemonsFetchedUseCase } from '../../application/usecases/GetPokemonsFetched';

interface PokemonContext {
    pokemons: Pokemon[] | [];
    getPokemons(limit: number): Promise<void>;
    getPokemonDescription(idPokemonm: string, language: string): Promise<void>;
    getPokemonsFetched(): Promise<void>;
}

const PokemonContext = createContext<PokemonContext | null>(null);

export const usePokemon = () => {
    const context = useContext(PokemonContext);
    if (!context) throw new Error("usePokemon must be used within a PokemonProvider");
    return context;
};

const PokemonProvider = ({ children }: { children: React.ReactNode }) => {
    const pokemonImplement = new PokemonRepositoryImpl(new PokemonDataSource());
    const GetPokemons = new GetPokemonsUseCase(pokemonImplement);
    const GetPokemonDescription = new GetPokemonDescriptionUseCase(pokemonImplement);
    const getPokemonFetched = new GetPokemonsFetchedUseCase(pokemonImplement);


    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const getPokemons = async (limit: number) => {
        const newPokemons = await GetPokemons.execute(limit);
        setPokemons((prevPokemons) => {
            const filteredPokemons = newPokemons.filter(
                newPokemon => !prevPokemons.some(pokemon => pokemon.id === newPokemon.id)
            );
            return [...prevPokemons, ...filteredPokemons];
        });
    }

    const getPokemonDescription = async (idPokemon: string, language: string) => {
        const descriptionPokemon = await GetPokemonDescription.execute(idPokemon, language);
        setPokemons((prevPokemons) =>
            prevPokemons.map((pokemon) =>
                pokemon.id === idPokemon
                    ? { ...pokemon, description: descriptionPokemon }
                    : pokemon
            )
        );
    }

    const getPokemonsFetched = async () => {
        const pokemons = await getPokemonFetched.execute();
        setPokemons((prevPokemons) => {
            const filteredPokemons = pokemons.filter(
                newPokemon => !prevPokemons.some(pokemon => pokemon.id === newPokemon.id)
            );
            return [...prevPokemons, ...filteredPokemons];
        });
    }

    return (
        <PokemonContext.Provider value={{ pokemons, getPokemons, getPokemonDescription, getPokemonsFetched }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider