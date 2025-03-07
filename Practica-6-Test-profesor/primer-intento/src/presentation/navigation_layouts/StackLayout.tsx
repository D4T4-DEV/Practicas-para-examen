import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
    return (
        <Stack screenOptions={{
            title: 'Cat Fact Game 😺'
        }}>
            <Stack.Screen name='index' />
            <Stack.Screen name='game' options={{ title: 'Andamos jugando 🙀' }} />
        </Stack>
    )
}

export default StackLayout