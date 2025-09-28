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

const page = ({ params }: PageProps) => {
    const { 'module-id': moduleId } = params;
    const currentModule = modules.find(module => module.id === moduleId);
    if (!currentModule) {
        return (
            <PagesLayout title='Module non trouvé' />)
    }
    return (
        <PagesLayout title='Formations'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-2xl font-bold'>{currentModule.title}</h2>
                <p>{currentModule.description}</p>
                <h3 className='text-xl font-semibold'>Leçons :</h3>
                <ul>
                    {currentModule.lessons.map((lesson, index) => (
                        <li key={index} className='text-blue-500 hover:underline list-inside list-disc pl-5'>{lesson.title}</li>
                    ))}
                </ul>
                <Link href='/formations'><Button>Retour aux formations</Button></Link>
            </div>

        </PagesLayout>
    )
}

export default page