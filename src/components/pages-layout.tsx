import React, { JSX, PropsWithChildren } from 'react'

interface PagesLayoutProps {
  title?: string
  children?: React.ReactNode
}

export const PagesLayout = (props: PropsWithChildren<PagesLayoutProps>) => {
  return (
    <div className='flex flex-col p-4 gap-4 max-w-md mx-auto min-h-full'>
      <h1 className='text-4xl font-bold text-center'>{props.title}</h1>
      {props.children}
    </div>
  )
}