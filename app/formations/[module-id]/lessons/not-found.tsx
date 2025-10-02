import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Link } from 'lucide-react'
import React from 'react'


const NotFound = () => {
  return (
    <Card className='p-6'>
        Leçon not found
        <Link href='/formations'><Button>Retour aux formations</Button></Link>
    </Card>
  )
}

export default NotFound