import React, { FC } from 'react'

interface Props {
    title?: string,
    description?: string
}

const Card: FC<Props> = ({title, description, children}) => {
    return (
        <div className="flex-1 bg-white shadow-md rounded-md mx-2 p-3">
            <h2 className="text-2xl">{title}</h2>
            <div>{children}</div>
            <div className="text-sm text-gray-700">{description}</div>
        </div>
    )
}

export default Card
