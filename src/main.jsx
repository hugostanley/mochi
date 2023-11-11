import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard, LandingPage, Login, SignUp, Overview, Transaction, Client, Transfer, Deposit } from '@/pages'
import { ProtectedRoute } from '@/components'
import { globals, loginAction, signUpAction } from '@/utils'
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
        element: <Login />,
        action: loginAction
    },
    {
        path: globals.paths.signup,
        action: signUpAction,
        element: <ProtectedRoute><SignUp /></ProtectedRoute>
    },
    {
        path: globals.paths.dashboard,
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
        children: [
            {
                index: true,
                element: <Overview />,
            },
            {
                path: globals.paths.transactions,
                element: <Transaction />
            },
            {
                path: globals.paths.clients,
                element: <Client />
            },
            {
                path: globals.paths.transfer,
                element: <Transfer />
            },
            {
                path: globals.paths.deposit,
                element: <Deposit />
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ToastContainer />
        <RouterProvider router={router} />
    </React.StrictMode>
)
