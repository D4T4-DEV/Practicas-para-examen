import React from 'react'
import { Stack } from 'expo-router'

export default function StackLayout() {
    return (
        <Stack
            screenOptions={{
                // headerStyle: { backgroundColor: '#f8f8f8' }, // Color de fondo del encabezado
                // headerTintColor: '#333', // Color del texto en el encabezado
                // headerTitleStyle: { fontWeight: 'bold' }, // Estilo del título en el encabezado
                headerShown: false
            }}
        >
            {/* <Stack.Screen name='index' options={{ title: 'Inicio' }} /> */}
            {/* <Stack.Screen name='(drawer)' options={{ headerShown: false }} /> */}
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        </Stack>
    )
}