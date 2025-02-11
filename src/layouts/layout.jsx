import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
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
