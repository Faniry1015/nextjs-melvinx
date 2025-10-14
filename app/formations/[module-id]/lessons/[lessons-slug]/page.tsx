import { PagesLayout } from '@/components/pages-layout'
import React from 'react'
import modules from '../../../modules';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { notFound } from 'next/navigation';

interface PageProps {
    params: {
        'module-id': string;
        'lessons-slug': string;
    };
}

const page = async ({ params }: PageProps) => {
    const currentModule = modules.find(module => module.id === params['module-id']);
    const currentLesson = currentModule?.lessons.find(lesson => lesson.slug === params['lessons-slug']);

    await new Promise(resolve => setTimeout(resolve, 3000));
    
    if (!currentLesson) {
        return (
            notFound()
        )
    }

    return (
        <PagesLayout title=''>
            <Card className='p-6'>
                <CardHeader>
                    <h2 className='text-2xl font-bold'>{currentLesson.title}</h2>
                </CardHeader>
                <CardContent>
                    <p>{currentLesson.objective}</p>
                    <h3 className='text-xl font-italic'>Lien externes</h3>
                    <ul>
                        {currentLesson.resources.map((item, index) => (
                            <Link href={item} key={index}><li  className='list-inside list-disc pl-5'>{item}</li></Link>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter>
                    <Link href={`/formations/${currentModule?.id}`}><Button className='mt-4'>Retour au module</Button></Link>
                </CardFooter>
            </Card>

        </PagesLayout>
    )
}

export default page