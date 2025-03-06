import StackLayout from '@/src/presentation/navigation_layouts/StackLayout'
import CatFactProvider from '@/src/presentation/viewmodels/CatFactProvider'
import React from 'react'

export default function layout() {
    return (
        <CatFactProvider>
            <StackLayout />
        </CatFactProvider>
    )
}