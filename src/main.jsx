import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard, LandingPage, Login, SignUp } from '@/pages'
import { ProtectedRoute } from '@/components'
import { globals, signUpAction } from '@/utils'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import './index.css'

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
    },
    {
        path: globals.paths.dashboard,
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <ToastContainer />
        <RouterProvider router={router} />
    </>,
)
