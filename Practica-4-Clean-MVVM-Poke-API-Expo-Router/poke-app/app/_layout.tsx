import StackLayout from "../src/presentation/navigation_layouts/StackLayout";

import React from 'react'
import PokemonProvider from "../src/presentation/viewmodels/PokemonViewModel";
import TabsLayout from "../src/presentation/navigation_layouts/TabsLayout";

const _layout = () => {
    return (
        <PokemonProvider>
            <StackLayout />
        </PokemonProvider>
    )
}

export default _layout;