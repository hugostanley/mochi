import { globals } from '@/utils'
import React from 'react'
import { Link } from 'react-router-dom'

export function LandingPage() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className='flex flex-col shadow-sm border border-gray-300 w-64 h-64 rounded-xl items-center justify-center bg-white'>
                <h1>This is the landing page</h1>
                <Link to={globals.paths.login}>Login</Link>
                <Link to={globals.paths.signup}>Sign up</Link>
            </div>
        </div>
    )
}
