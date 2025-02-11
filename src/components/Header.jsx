import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div className='bg-gray-900 py-4 shadow-sm'>
            <div className='flex justify-between w-9/12 m-auto'>
                <Link className='text-white flex items-center'>
                    <p className='font-bold font-serif text-md uppercase border border-white p-3'>Miguel Wils</p>
                </Link>
                <nav className='flex gap-6 text-white items-center uppercase text-sm'>
                    <Link>Approach</Link>
                    <Link>method</Link>
                    <Link>My Journey</Link>
                    <Link>Payments</Link>
                    <Link>FAQS</Link>
                    <Link>Contact</Link>
                </nav>
            </div>
        </div>
    )
}
