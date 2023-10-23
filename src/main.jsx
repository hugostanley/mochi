import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from '@/App'
import { Login, SignUp } from '@/pages'
import { signUpAction } from '@/utils/actions/signUpAction'


const router = createBrowserRouter([
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: '/app',
        element: <App />,
        action: async ({ request }) => {
            let formdata = await request.formData()
            console.log(...formdata)
            console.log(formdata.get('username'))

            return <App />
        }
    },
    {
        path: '/signup',
        action: signUpAction,
        element: <SignUp />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
