import React, { FC, ReactNode } from 'react'

interface Props {
    title?: string,
    description?: string,
    children: ReactNode
}

const Card: FC<Props> = ({title, description, children}) => {
    return (
        <div className="card flex-1 bg-white shadow-md rounded-md mx-2 p-3 hover:scale-105 hover:shadow-lg transform transition ease-in-out duration-75" tabIndex={0}>
            <h2 className="text-2xl">{title}</h2>
            <div>{children}</div>
            <div className="text-sm text-gray-700">{description}</div>
        </div>
    )
}

export default Card
