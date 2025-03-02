import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
    return (
        <Tabs>
            {/* Pantalla principal */}
            <Tabs.Screen name='index' options={{ title: 'Inicio' }} />

            <Tabs.Screen name='about/[id]' options={{
                title: 'Pokemon',
                href: "/null"
            }} />
        </Tabs>
    );
}

export default TabsLayout;