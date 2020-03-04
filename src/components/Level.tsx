import React, { FC } from 'react'

interface Props {
    level: number
}

const Level: FC<Props> = ({ level }) => {
    return (
        <div className="level rounded-sm bg-green-200 p-1 overflow-hidden w-56 text-center">
            <div className="level__values">
                <code><sup>-</sup>3..2..1..0..1..2..<sup>+</sup>3</code>
            </div>
            <div className="level__mark rounded-sm bg-gray-900 w-3 h-4"></div>
            { level }
        </div>
    )
}

export default Level
