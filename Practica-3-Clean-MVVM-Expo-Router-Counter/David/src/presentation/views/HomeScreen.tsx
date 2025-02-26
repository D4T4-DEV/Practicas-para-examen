import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'

export const HomeScreen = () => {
    const { width, height } = useWindowDimensions();

    const isCellphone = width <= 600 ? true : false;

    return (
        <View style={styles.principalContainer}>
            <Text style={[styles.title, { fontSize: isCellphone ? width * 0.06 : 48 }]}>Pantalla de inicio</Text>
            <Text style={[styles.parrafos, {fontSize: isCellphone ? width * 0.04 : 22 }]}>Este es un proyecto sencillo usando Arquitectura Limpia con MVVM y Expo-Router</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    principalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold'
    },
    parrafos: {
        fontSize: 18
    },
});