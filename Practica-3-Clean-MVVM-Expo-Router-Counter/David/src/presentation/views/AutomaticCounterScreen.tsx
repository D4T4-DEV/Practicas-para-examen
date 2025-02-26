import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';
import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useCounter } from '../viewmodels/CouterViewModel';

const AutomaticCounterScreen = () => {
    const { width } = useWindowDimensions();
    const { counter, addValue, subtractValue } = useCounter();
    const [isIncreasing, isSetIncreasing] = useState(true);

    useFocusEffect(
        useCallback(() => {
            const interval = setInterval(() => {

                // Decide que deberá hacer en base al valor y si es verdadero
                if (counter.value >= 10 && isIncreasing) {
                    isSetIncreasing(false); // Cambia a restar
                    return;
                } else if (counter.value <= -10 && !isIncreasing) {
                    isSetIncreasing(true); // Cambia a sumar
                    return;
                }

                // Realiza la acción
                if (isIncreasing) {
                    addValue(1);
                } else {
                    subtractValue(1);
                }
            }, 1000);

            return () => clearInterval(interval); // Limpieza al salir de la vista
        }, [counter.value, isIncreasing])
    );

    const isCellphone = width <= 600;

    return (
        <View style={styles.principalContainer}>
            <Text style={[styles.title, { fontSize: isCellphone ? width * 0.06 : 48 }]}>
                Estamos {isIncreasing ? 'Sumando' : 'Restando'} 🧮
            </Text>
            <Text style={styles.parrafos}>Contador va en </Text>
            <Text style={styles.title}>{counter.value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    principalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
    },
    parrafos: {
        fontSize: 18,
    },
});

export default AutomaticCounterScreen;
