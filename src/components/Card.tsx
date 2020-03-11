import React, { FC, ReactNode } from 'react'

interface Props {
    title?: string,
    description?: string,
    children: ReactNode
}

const Card: FC<Props> = ({title, description, children}) => {
    return (
        <div 
            // className="card bg-white shadow-md rounded-md mx-2 p-3 md:hover:scale-105 hover:shadow-lg transform transition ease-in-out duration-100 flex-1 md:flex-initial md:w-64 mb-4 md:mb-0" 
            className="card bg-white shadow-md rounded-md mx-2 p-3 md:hover:scale-105 hover:shadow-lg transform transition ease-in-out duration-100 md:flex-initial w-10/12 md:w-64 mb-4 md:mb-0 flex-shrink-0 scrolling-touch" 
            style={{
                scrollSnapAlign: 'center'
            }}
            tabIndex={0}
        >
            <h2 className="text-2xl">{title}</h2>
            <div>{children}</div>
            <div className="md:text-sm text-gray-600 text-xs">{description}</div>
        </div>
    )
}

export default Card
