import React, { PropsWithChildren } from 'react'
import { Header } from './header'

interface PagesLayoutProps {
  title?: string
  children?: React.ReactNode
}

export const PagesLayout = (props: PropsWithChildren<PagesLayoutProps>) => {
  return (
    <div className='flex flex-col p-4 gap-4 mx-auto min-h-full'>
      <Header />
      <div className='flex justify-center min-h-full'>
        <h1 className='text-4xl font-bold text-center'>{props.title}</h1>
      </div>
      {props.children}
    </div>
  )
}