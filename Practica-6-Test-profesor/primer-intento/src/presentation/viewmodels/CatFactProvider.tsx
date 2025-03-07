import { GetCatFactUseCase } from "@/src/application/usecases/GetCatFactUseCase";
import { CatFactRepositoryImpl } from "@/src/data/repositories/CatFeactRepositoryImpl";
import { CatFact } from "@/src/domain/entities/CatFact";
import { PlayerStatics } from "@/src/domain/entities/StaticsUser";
import React, { createContext, useContext, useEffect, useState } from "react"



const CatFactContext = createContext<any>(null);

export const useCatFact = () => {
    const context = useContext(CatFactContext);
    if (!context)
        throw new Error('Necesario envolverlo en un CatFactProvider');
    return context;
}

interface CatFactProviderProps {
    children: React.ReactNode
}

const CatFactProvider: React.FC<CatFactProviderProps> = ({ children }) => {

    // Implementacion del repositorio
    const catFactRepositoryImpl = new CatFactRepositoryImpl();

    // Caso de uso
    const getCatFactUseCase = new GetCatFactUseCase(catFactRepositoryImpl);


    const [statictsUser, setStatictsUser] = useState<PlayerStatics>({
        incorrectAnswers: 0,
        correctAnswers: 0,
    });

    const [catFact, setCatFact] = useState<CatFact | string>();

    useEffect(() => {
        catFactRepositoryImpl.getStaticsPlayer().then(setStatictsUser);
        getCatFactUseCase.execute().then(setCatFact);
    }, []);


    const checkAnswer = async (catFact: CatFact, answer: boolean) => {

        if (answer === catFact.isAFact) {
            setStatictsUser((prevStats: PlayerStatics) => {
                return {
                    correctAnswers: prevStats.correctAnswers + 1,
                    incorrectAnswers: prevStats.incorrectAnswers,
                }
            });
            console.log('Acertaste')
            setCatFact('');

        } else {
            setStatictsUser((prevStats: PlayerStatics) => {
                return {
                    correctAnswers: prevStats.correctAnswers,
                    incorrectAnswers: prevStats.incorrectAnswers + 1,
                }
            });
            console.log('Fallaste')
            setCatFact('');
        }
        await catFactRepositoryImpl.savedStaticsPlayer(statictsUser);
        await getCatFactUseCase.execute().then(setCatFact);
    }

    // const checkAnswer = async (catFact: CatFact, answer: boolean) => {
    //     setStatictsUser((prevStats) => {
    //         const updatedStats: PlayerStatics = {
    //             correctAnswers: prevStats.correctAnswers + (answer === catFact.isAFact ? 1 : 0),
    //             incorrectAnswers: prevStats.incorrectAnswers + (answer !== catFact.isAFact ? 1 : 0),
    //         };

    //         Guardar el estado actualizado después de establecerlo
    //         catFactRepositoryImpl.savedStaticsPlayer(updatedStats);
    //         catFactRepositoryImpl.savedStaticsPlayer(statictsUser);
    //         getCatFactUseCase.execute().then(setCatFact);
    //         return updatedStats;
    //     });
    // };

    const cleanStaticsData = async () => {
        await catFactRepositoryImpl.clearAllStaticsPlayer();
        setStatictsUser({
            incorrectAnswers: 0,
            correctAnswers: 0,
        });
    }

    return (
        <CatFactContext.Provider value={{ catFact, statictsUser, checkAnswer, cleanStaticsData }}>
            {children}
        </CatFactContext.Provider>
    )
}

export default CatFactProvider