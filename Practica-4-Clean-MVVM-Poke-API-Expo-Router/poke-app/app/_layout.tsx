import StackLayout from "../src/presentation/navigation_layouts/StackLayout";

import React from 'react'
import PokemonProvider from "../src/presentation/viewmodels/PokemonViewModel";
import { StatusBar } from "expo-status-bar";

const _layout = () => {
    return (
        <PokemonProvider>
            <StatusBar style="auto" />
            <StackLayout />
        </PokemonProvider>
    )
}

export default _layout;