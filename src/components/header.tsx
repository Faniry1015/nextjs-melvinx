import React from 'react'
import { ModeToggle } from './theme-toggle'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className='w-full py-4 px-8 border-b border-gray-300 flex items-center justify-between'>
      <div className='text-2xl font-bold'>Mon Application</div>
      <div className='space-x-4'>
        <Link href='/' className='text-gray-700 hover:text-gray-900'>Accueil</Link>
        <Link href='/formations' className='text-gray-700 hover:text-gray-900'>Formations</Link>
        <Link href='/contact' className='text-gray-700 hover:text-gray-900'>Contact</Link>
        <ModeToggle />
      </div>

    </div>
  )
}