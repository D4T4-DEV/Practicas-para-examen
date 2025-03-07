import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useCatFact } from '../viewmodels/CatFactProvider'
import { CatFact } from '@/src/domain/entities/CatFact';
import AnswerModal from '../components/AnswerModal';

const GameScreen = () => {

    const { catFact, statictsUser, checkAnswer } = useCatFact();

    const [showModal, setShowModal] = useState<boolean>(false);
    const [userResponse, setUserResponse] = useState<boolean>(false);


    const handleAnswer = async (catFact: CatFact, userAnswer: boolean) => {
        await checkAnswer(catFact, userAnswer);
        setUserResponse(userAnswer); // Guarda la respuesta
        setShowModal(true); // Abre el modal
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Pregunta:</Text>
            <Text>
                {
                    catFact?.fact ? (catFact?.fact) : <ActivityIndicator />
                }
            </Text>

            {/* BtnContainer */}
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
            <AnswerModal
                visible={showModal}
                onClose={() => setShowModal(false)}
                userResponse={userResponse}
                catFactIsAFact={catFact?.isAFact}
            />
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