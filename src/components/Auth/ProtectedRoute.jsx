import React from 'react'
import { getLocalStorage, globals } from '@/utils'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'


export function ProtectedRoute({ children }) {
    const userSignedIn = getLocalStorage("userSignedIn")
    const currentUser = getLocalStorage("currentUser")

    if (!userSignedIn && !currentUser) {
        toast.error('Please login to access the page', { position: "top-center" })
        return <Navigate to={globals.paths.login} replace={true} />
    }

    return (
        <>
            {children}
        </>
    )
}
