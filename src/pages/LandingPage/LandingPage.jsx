import { globals } from '@/utils'
import React from 'react'
import { Link } from 'react-router-dom'

export function LandingPage() {
    return (
        <div>
            <h1>This is the landing page</h1>
            <Link to={globals.paths.login}>Login</Link>
            <Link to={globals.paths.signup}>Sign up</Link>
        </div>
    )
}
