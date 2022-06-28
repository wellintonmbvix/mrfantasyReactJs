import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AppLayout from './AppLayout'

export default function AppRoutes(){
    return(
        <BrowserRouter>
        <AppLayout>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </AppLayout>
        </BrowserRouter>
    )
}