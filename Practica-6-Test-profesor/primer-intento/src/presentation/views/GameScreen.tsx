import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useCatFact } from '../viewmodels/CatFactProvider'
import { CatFact } from '@/src/domain/entities/CatFact';

const GameScreen = () => {

    const { catFact, statictsUser, checkAnswer } = useCatFact();


    const handleAnswer = async (catFact: CatFact, userAnswer: boolean) => {
        await checkAnswer(catFact, userAnswer);
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Pregunta:</Text>
            {/* BtnContainer */}
            <Text>
                {
                    catFact?.fact ? (catFact?.fact) : <ActivityIndicator />
                }
            </Text>

            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.btnFalse} onPress={() => handleAnswer(catFact, false)}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Falso</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnTrue} onPress={() => handleAnswer(catFact, true)}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Verdadero</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerStatus}>
                <Text>Correctas: {statictsUser?.correctAnswers | 0}</Text>
                <Text>Incorrectas: {statictsUser?.incorrectAnswers | 0}</Text>
            </View>
        </View>
    );
}

export default GameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerButton: {
        flexDirection: 'row',
        padding: 5,
        gap: 10
    },
    containerStatus: {
        flexDirection: 'row',
        padding: 5,
        gap: 10
    },
    btnFalse: {
        backgroundColor: 'red',
        padding: 10,
    },
    btnTrue: {
        backgroundColor: 'green',
        padding: 10,
    }
});