import React from 'react'
import { Link } from 'react-router-dom'

function isActiveClass(isActive){
    return isActive ? 'bg-lime-500 text-lime-50 font-bold shadow-lg' : 'text-gray-400 hover:bg-lime-400 hover:text-lime-50 font-bold'
}

export function SideBarLink({isActive, text, to, icon }) {
    return (
        <Link className={`flex w-full justify-start gap-2 p-4 pl-6 rounded-full cursor-pointer ${isActiveClass(isActive)}`} to={to}>
            {icon}
            <span>{text}</span>
        </Link>
    )
}
