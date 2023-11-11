import React from 'react'
import { SideBar } from '@/pages'
import { Outlet } from 'react-router-dom'

export function Dashboard() {
    return (
        <main className='flex w-full h-screen'>
            <SideBar />
            <Outlet />
       </main>
    )
}
