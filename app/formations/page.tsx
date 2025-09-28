import { PagesLayout } from '@/components/pages-layout'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <PagesLayout title='Formations'    
    >
        <div>
            <h2>Liste des formations</h2>
            <ul>
                <li><Link href="/formations/formation1" >Formation numéro 1</Link></li>
                <li><Link href="/formations/formation2" >Formation numéro 2</Link></li>
                <li><Link href="/formations/formation3" >Formation numéro 3</Link></li>
            </ul>
                
        </div>
    </PagesLayout>
  )
}

export default page