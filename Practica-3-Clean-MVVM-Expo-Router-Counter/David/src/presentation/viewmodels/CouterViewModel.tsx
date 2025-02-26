import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { CouterRepository } from '../../domain/repository/CouterRepository';
import { Counter } from '../../domain/entities/Couter';
import { CouterRepositoryImpl } from '../../data/repositories/CouterRepositoryImpl';
import { GetValueUseCase } from '../../application/use_cases/GetValueUseCase';
import { AddValueUseCase } from '../../application/use_cases/AddValueUseCase';
import { SubtractValueUseCase } from '../../application/use_cases/SubtractValueUseCase';

interface CounterContext extends CouterRepository {
    counter: Counter
}


// Creacion del contexto
const CounterContext = createContext<CounterContext | null>(null);

// Hook personalizado
export const useCounter = () => useContext(CounterContext);

export default function CouterViewModel({ children }: { children: React.ReactNode }) {

    // Repositorio de acciones
    const counterRepository = new CouterRepositoryImpl();

    // Casos de uso para dotar de las acciones 
    const getValueUseCase = new GetValueUseCase(counterRepository);
    const addValueUseCase = new AddValueUseCase(counterRepository);
    const subtracValueUseCase = new SubtractValueUseCase(counterRepository);


    const [counter, setCounter] = useState<Counter>({ value: 0 });

    useEffect(() => {
        getValueUseCase.execute().then(setCounter);
    }, []);

    const addValue = async (value: number): Promise<void> => {
        await addValueUseCase.execute(value);
    }

    const subtractValue = async (value: number): Promise<void> => {
        await subtracValueUseCase.execute(value);
    }

    const getValue = async (): Promise<Counter> => {
        return await getValueUseCase.execute();
    }


    return (
        <CounterContext.Provider value={{ counter, addValue, subtractValue, getValue }}>
            {children}
        </CounterContext.Provider>
    )
}