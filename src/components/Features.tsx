import React from 'react'

export default function Features({children, title} : any) {
  return (
    <div>
            <div className='bg-white rounded-[10px] shadow-5xl w-fit p-4 mb-5'>
                {children}
            </div>
            <h3 className='font-semibold text-xl lg:text-2xl leading-[135%]'>{title}</h3>
        </div>
  )
}
