import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LandingPage, Login, SignUp } from '@/pages'
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
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ToastContainer />
        <RouterProvider router={router} />
    </React.StrictMode>,
)
