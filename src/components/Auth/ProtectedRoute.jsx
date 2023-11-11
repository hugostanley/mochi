import React from 'react'
import { getLocalStorage, globals } from '@/utils'
import { Navigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

export function ProtectedRoute({ children }) {
    const userSignedIn = getLocalStorage("userSignedIn")
    const currentUser = getLocalStorage("currentUser")
    const location = useLocation()

    if (!userSignedIn && !currentUser) {
        toast.error('Please login to access the page', { position: "top-center" })
        return <Navigate to={globals.paths.login} replace={true} />
    }

    if (location.pathname === globals.paths.login || location.pathname === globals.paths.signup) {
        return <Navigate to={globals.paths.dashboard} replace={true} />
    }

    return (
        <>
            {children}
        </>
    )
}
