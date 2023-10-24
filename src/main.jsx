import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LandingPage, Login, SignUp } from '@/pages'
import { globals, signUpAction } from '@/utils'

const router = createBrowserRouter([
    {
        path: globals.paths.home,
        element: <LandingPage />
    },
    {
        path: globals.paths.login,
        element: <Login />
    },
    {
        path: globals.paths.signup,
        action: signUpAction,
        element: <SignUp />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
