import { PagesLayout } from '@/components/pages-layout'
import React from 'react'
import MODULES from '../modules';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export async function generateStaticParams () {
    const modules = MODULES
    const result = modules.map(module => ({
        'module-id': module.id
    }))
    return result;
}

const page = async ({ params }: { params: { 'module-id': string } }) => {
    const moduleId = params['module-id'];
    const currentModule = MODULES.find(module => module.id === moduleId);
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