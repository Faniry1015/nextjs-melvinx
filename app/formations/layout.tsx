import React, { PropsWithChildren } from 'react'

const Layout = (props: PropsWithChildren) => {
  return (
    
    <div>
        <h1 className='text-3xl font-bold'>Formation</h1>
        {props.children}
        </div>
  )
}

export default Layout