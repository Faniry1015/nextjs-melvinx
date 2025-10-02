import { PagesLayout } from '@/components/pages-layout'
import React from 'react'
import modules from '../modules';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface PageProps {
    params: {
        'module-id': string;
    };
}

const page = async ({ params }: PageProps) => {
    const currentModule = modules.find(module => module.id === params['module-id']);
    if (!currentModule) {
        return (
            <PagesLayout title='Module non trouvé' />)
    }
    return (
        <PagesLayout title=''>
            <div className='flex flex-col gap-4'>
                <h2 className='text-2xl font-bold'>{currentModule.title}</h2>
                <p>{currentModule.description}</p>
                <h3 className='text-xl font-semibold'>Leçons :</h3>
                <ul>
                    {currentModule.lessons.map((lesson, index) => (
                        <Link href={`${currentModule.id}/lessons/${lesson.slug}`} key={index}><li  className='text-blue-500 hover:underline list-inside list-disc pl-5'>{lesson.title}</li></Link>
                    ))}
                </ul>
                <Link href='/formations'><Button>Retour aux formations</Button></Link>
            </div>

        </PagesLayout>
    )
}

export default page