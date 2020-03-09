import React, { FC, ReactNode } from 'react'

interface Props {
    title?: string,
    description?: string,
    children: ReactNode
}

const Card: FC<Props> = ({title, description, children}) => {
    return (
        <div 
            className="card bg-white shadow-md rounded-md mx-2 p-3 md:hover:scale-105 hover:shadow-lg transform transition ease-in-out duration-100 flex-1 md:flex-initial md:w-64 mb-4 md:mb-0" 
            tabIndex={0}
        >
            <h2 className="text-2xl">{title}</h2>
            <div>{children}</div>
            <div className="text-sm text-gray-600">{description}</div>
        </div>
    )
}

export default Card
