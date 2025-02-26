import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export const HomeScreen = () => {
    return (
        <View style={styles.principalContainer}>
            <Text style={styles.title}>Pantalla de inicio</Text>
            <Text style={styles.parrafos}>Este es un proyecto sencillo usando Arquitectura Limpia</Text>
            <Text style={styles.parrafos}>con MVVM y Expo-Router</Text>
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