import React from 'react'
import CouterViewModelProvider from '../src/presentation/viewmodels/CouterViewModel'
import StackLayout from '../src/presentation/navigation_layouts/StackLayout'


export default function Layout() {
    return (
        // Importacion del proveedor del contexto
        <CouterViewModelProvider>
            <StackLayout />
        </CouterViewModelProvider>
    )
}
