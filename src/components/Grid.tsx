import React, { FC } from 'react'

interface Props {
    show: boolean
}

const Grid: FC<Props> = ({ show }) => {
    if (show) {
        return (
            <div className="grid rounded-sm overflow-hidden">
                { [...Array(9)].map((item, i) => {
                    return (
                        <div 
                            className="border border-gray-100 opacity-50"
                            key={i}
                        />
                    )
                }) }
            </div>
        )
    } else{
        return null
    }
}

export default Grid
