import React from 'react'

export default function Footer() {
    return (
        <div className='bg-gray-900 p-6 text-white text-center'>
            <div className='border p-4'>
                <div className='inline-block p-6'>
                    <h6 className='underline text-2xl mb-4'>Contact info:</h6>
                    <p>Tel: <span className='text-amber-400'>+34 654814450</span></p>
                    <p>E-mail: <span className='text-amber-400'>michelwils2016@gmail.com</span></p>
                </div>
                <div className='mb-4'>
                    <p className='font-bold font-serif text-md uppercase border border-white p-3 inline-block mb-6'>Miguel Wils</p>
                    <p>&copy; 2025 Miguel Wils. All rights reserved.</p>
                </div>
            </div>

        </div>
    )
}
