import React from 'react'
import LambulaLogo from '../images/Lambula logo.svg'
import profiel from '../images/kevin-mueller-aeNg4YA41P8-unsplash.jpg'

export default function Navbar() {

  return (
    <>  
<nav className="fixed top-0 z-50 w-full bg-black text-syellow">
        <div className="px-3 py-1 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-start">
                <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex md:hidden items-center p-2 text-sm text-white focus:ring-0 focus:outline-none focus:border-none active:text-syellow">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
                <a href="/" className="flex ml-2 md:mr-24">
                    <img src={LambulaLogo} alt="..." />
                </a>
                </div>
            <div className="flex items-center">
                <div className="flex items-center ml-3">
                    <div id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className=" focus:ring-0 focus:outline-none rounded-lg text-sm px-4 py-2.5 text-center items-center cursor-pointer flex flex-col justify-center w-fit min-w-fit" type="button"><img src={profiel} alt="..." className=" w-8 h-8 rounded-full border border-syellow"/> <i className="fa-solid fa-chevron-down text-syellow"></i></div>
                    <div  id="dropdownInformation"  className="z-10 hidden rounded-lg bg-black bg-opacity-70 text-white shadow min-w-[200px] max-w-[250px] dark:bg-gray-700 border-2 border-syellow px-4 py-6 text-xs font-normal tracking-wide">
                        <ul className="space-y-3" >
                            <div className="flex justify-start items-center space-x-2">
                                <div className="w-10 h-10 rounded-full border border-syellow overflow-hidden">
                                    <img src={profiel} className="w-full h-full" alt="..."/>
                                </div>
                                <div>
                                    <p className="text-sm ">Andrew Mukuye</p>
                                    <p className="text-xs text-gray-500">Registered 2017</p>
                                </div>
                            </div>
                        <li>
                            <p className="block ease-in-out duration-500">Manage Profile</p>
                        </li>
                        <hr className=""/>
                        <div className="space-y-1">
                            <li>
                                <a href="/" className="block  hover:text-syellow hover:translate-x-4 ease-in-out duration-500">Edit Profile & Payments</a>
                            </li>
                            <li>
                                <a href="/" className="block  hover:text-syellow hover:translate-x-4 ease-in-out duration-500">Favourites</a>
                            </li>
                            <li>
                                <a href="/" className="block  hover:text-syellow hover:translate-x-4 ease-in-out duration-500">FAQ's</a>
                            </li>
                            <li>
                                <a href="/" className="block  hover:text-syellow hover:translate-x-4 ease-in-out duration-500">Refund Policy</a>
                            </li>
                            <li>
                                <a href="/" className="block  hover:text-syellow hover:translate-x-4 ease-in-out duration-500">Notification</a>
                            </li>
                        </div>
                        <hr className=""/>
                        <li>
                            <a href="/" className="block text-syellow hover:text-yellow-800 ease-in-out duration-500">Sign In</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </nav>
    </>
  )
}
