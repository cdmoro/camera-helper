import React, { FC } from 'react'

interface Props {
    title: string,
    description: string
}

const Card: FC<Props> = ({title, description, children}) => {
    return (
        <div className="flex-1 bg-white shadow-md rounded-md mx-2 p-2">
            <h2 className="text-2xl">{title}</h2>
            <div className="text-sm text-gray-700">{description}</div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Card
