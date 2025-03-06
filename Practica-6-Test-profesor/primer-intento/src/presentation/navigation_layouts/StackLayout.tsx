import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
    return (
        <Stack screenOptions={{
            title: 'Juego del gato'
        }}>
            <Stack.Screen name='index' />
            <Stack.Screen name='game' />
        </Stack>
    )
}

export default StackLayout