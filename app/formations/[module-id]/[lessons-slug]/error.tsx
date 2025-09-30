'use client'
import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

const error = () => {
  return (
    <Card className='p-6'>
        <CardHeader>
            Erreur de chargement de la leçon. Veuillez réessayer plus tard.
        </CardHeader>
        <Link href='/formations' ><Button>Retour aux formations</Button></Link>
    </Card>

  )
}

export default error