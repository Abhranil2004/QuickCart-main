'use client'
import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import { useAppContext } from '@/context/AppContext'
import { useRouter } from 'next/router'

const Navbar = () => {

  const { router } = useAppContext()

  // Logout function to clear the token and redirect
  const handleLogout = () => {
    // Clear token or user data from localStorage or context
    localStorage.removeItem('token') // Assuming you're storing token in localStorage

    // Redirect to the homepage
    router.push('/')
  }

  return (
    <div className='flex items-center px-4 md:px-8 py-3 justify-between border-b'>
      <Image onClick={() => router.push('/')} className='w-28 lg:w-32 cursor-pointer' src={assets.logo} alt="Logo" />
      <button
        onClick={handleLogout} // Call the handleLogout function on click
        className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>
        Logout
      </button>
    </div>
  )
}

export default Navbar
