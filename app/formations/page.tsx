import { PagesLayout } from '@/components/pages-layout'
import Link from 'next/link'
import React from 'react'
import modules from './modules'

const page = () => {
  return (
    <PagesLayout title='Formations'    
    >
        <div>
            <h2>Liste des formations</h2>
            <ul>
              {modules.map((module) => (
                <li key={module.id} className='text-blue-500 hover:underline list-inside list-disc pl-5'>
                  <Link href={`/formations/${module.id}`}>{module.title}</Link> </li>))}
            </ul>
                
        </div>
    </PagesLayout>
  )
}

export default page