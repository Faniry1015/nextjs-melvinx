import { PagesLayout } from '@/components/pages-layout'
import React from 'react'
import modules from '../../../modules';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { notFound } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

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
                    <Skeleton className='h-8 w-50 mb-4' />
                <CardContent>
                    <Skeleton className='h-4 w-full mb-2' />
                    <ul>
                        {[1, 2, 3].map((item, index) => (
                            <Skeleton key={index} className='h-4 w-full mb-2' />
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