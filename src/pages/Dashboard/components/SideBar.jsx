import { getLocalStorage } from '@/utils'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { SideBarLink } from '.'
import { SideBarLinks } from '@/utils'
import { Landmark } from 'lucide-react'
import { useLocation } from 'react-router-dom'

function capitalizeFirstLetter(value) {
    return value[0].toUpperCase()
}

export function SideBar() {
    const location = useLocation()
    const [currentUser, setCurrentUser] = useState(false)

    useEffect(() => {
        setCurrentUser(getLocalStorage("currentUser"))
    }, [])

    return (
        <section className='w-80 h-full bg-white py-6 px-4 flex flex-col gap-6'>
            <div className='w-full flex items-center gap-1 p-4'>
                <Landmark className='text-lime-500' size="50" />
                <h1 className='font-bold text-2xl'>SampleBank</h1>
            </div>
            <div className='flex flex-col gap-2'>
                {SideBarLinks.map((link, idx) => (
                    <SideBarLink isActive={location.pathname === link.to} key={idx} to={link.to} text={link.text} icon={link.icon} />
                ))}
            </div>
        </section>
    )
}
