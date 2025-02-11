import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function layout() {
    return (
        <main className='font-sans'>
            <div>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </main>
    )
}
