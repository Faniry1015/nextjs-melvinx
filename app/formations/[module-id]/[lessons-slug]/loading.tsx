import { PagesLayout } from '@/components/pages-layout'
import React from 'react'
import modules from '../../modules';
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
    return (
        <PagesLayout title=''>
            <Card className='p-6'>
                <CardHeader>
                    Loading...
                </CardHeader>
                <CardContent>
                    <p>...</p>
                    <h3 className='text-xl font-italic'>Lien externes</h3>
                    <ul>
                        {['...', '...', '...'].map((item, index) => (
                            <Link href={item}><li key={index} className='list-inside list-disc pl-5'>{item}</li></Link>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>

        </PagesLayout>
    )
}

export default page