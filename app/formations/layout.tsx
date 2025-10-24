import { PagesLayout } from '@/components/pages-layout'
import React, { PropsWithChildren } from 'react'
import Link from 'next/link';



const page = async (props: PropsWithChildren) => {


    return (
        <div className='flex items-center justify-center min-h-full'>
            <div className='border-r-2 pr-6 min-h-full'>
                <h1 className='text-3xl font-bold p-6'>Formations</h1>
                <nav className='p-6 min-h-full'>
                    <ul>
                        <li className='list-inside list-disc pl-5'><Link href='/formations/react'>React</Link></li>
                        <li className='list-inside list-disc pl-5'><Link href='/formations/nextjs'>Next.js</Link></li>
                        <li className='list-inside list-disc pl-5'><Link href='/formations/typescript'>TypeScript</Link></li>
                        <li className='list-inside list-disc pl-5'><Link href='/formations/javascript'>JavaScript</Link></li>
                    </ul>
                </nav>
            </div>
            {props.children}
        </div>
    )
}

export default page