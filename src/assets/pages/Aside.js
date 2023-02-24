import React from 'react'
import { Link } from 'react-router-dom'

export default function Aside() {
    return (
    <div>
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full md:translate-x-0 bg-black" aria-label="Sidebar">
            <div className="flex flex-col justify-between h-full py-8 overflow-y-auto bg-black text-white">
            <ul className="space-y-2">
                <li>
                    <Link to="Dashboard" className="flex items-center p-2 pl-6 text-base font-normal hover:text-syellow hover:border-l-4 ease-in-out duration-100 border-syellow active:text-syellow">
                        <i className="fa-solid fa-house"></i>
                        <span className="ml-3">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="Customers" className="flex items-center p-2 pl-6 text-base font-normal hover:text-syellow hover:border-l-4 ease-in-out duration-100 border-syellow">
                    <i className="fa-solid fa-user-plus"></i>
                        <span className="flex-1 ml-3 whitespace-nowrap">Customers</span>
                    </Link>
                </li>
                <li>
                    <Link to="Operators" className="flex items-center p-2 pl-6 text-base font-normal hover:text-syellow hover:border-l-4 ease-in-out duration-100 border-syellow">
                    <i className="fa-solid fa-user"></i>
                        <span className="flex-1 ml-3 whitespace-nowrap">Operators</span>
                    </Link>
                </li>
                <li>
                    <Link to="Packages" className="flex items-center p-2 pl-6 text-base font-normal hover:text-syellow hover:border-l-4 ease-in-out duration-100 border-syellow">
                    <i className="fa-solid fa-cubes"></i>
                        <span className="flex-1 ml-3 whitespace-nowrap">Packages</span>
                    </Link>
                </li>
                <li>
                    <Link to="Bookings" className="flex items-center p-2 pl-6 text-base font-normal hover:text-syellow hover:border-l-4 ease-in-out duration-100 border-syellow">
                    <i className="fa-solid fa-bookmark"></i>
                        <span className="flex-1 ml-3 whitespace-nowrap">Bookings</span>
                    </Link>
                </li>
                <li>
                    <Link to="Transactions" className="flex items-center p-2 pl-6 text-base font-normal hover:text-syellow hover:border-l-4 ease-in-out duration-100 border-syellow">
                    <i className="fa-solid fa-receipt"></i>
                        <span className="flex-1 ml-3 whitespace-nowrap">Transactions</span>
                    </Link>
                </li>
                <li>
                    <Link to="Settings" className="flex items-center p-2 pl-6 text-base font-normal hover:text-syellow hover:border-l-4 ease-in-out duration-100 border-syellow">
                    <i className="fa-solid fa-gear"></i>
                        <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
                    </Link>
                </li>
            </ul>
            <ul className="space-y-2">
                <li>
                    <Link to="/" className="flex items-center p-2 pl-6 text-base bg-syellow text-gray-700 hover:bg-yellow-400 hover:text-black hover:border-l-4 ease-in-out duration-100 border-syellow font-bold">
                    <i className="fa-solid fa-right-from-bracket"></i>
                        <span className="ml-3">Logout</span>
                    </Link>
                </li>
            </ul>
            </div>
        </aside>

        
    </div>
    )
}
