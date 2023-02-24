import React from 'react'
import { Link } from 'react-router-dom'

export default function Logout() {
  return (
    <>
      <div className='text-2xl text-gray-400 w-full min-h-screen bg-dark-gray'>
        <main className="h-screen w-full flex flex-col justify-center items-center bg-dark-gray">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-syellow px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5">
            <Link to='/' className="relative inline-block text-sm font-medium text-syellow group active:text-orange-500 focus:outline-none focus:ring">
                <span
                className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-syellow group-hover:translate-y-0 group-hover:translate-x-0"
                ></span>

                <span className="relative block px-8 py-3 bg-dark-gray border border-current">
                Go Home
                </span>
            </Link>
            </button>
        </main>
      </div>
    </>
  )
}
