import React, { FC } from 'react'

interface Props {
    show: boolean
}

const Grid: FC<Props> = ({ show }) => {
    return show ?
        (
            <div className="absolute inset-0">
                <div className="absolute h-full border-l border-r border-gray-100 opacity-50" style={{ left: '33.33%', width: '33.33%' }}></div>
                <div className="absolute w-full border-t border-b border-gray-100 opacity-50" style={{ top: '33.33%', height: '33.33%' }}></div>
            </div>
        )
        : null
}

export default Grid
