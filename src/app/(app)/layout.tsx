import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex flex-col lg:mx-24 md:mx-10 mx-0 bg-background'>
        {children}
    </div>
  )
}

export default layout