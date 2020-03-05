import React, { FC, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../redux'

const Level: FC = () => {
    const brightness = useSelector((state: AppState) => state?.brightness)
    const [translation, setTranslation] = useState(0)

    useEffect(() => {
        setTranslation(brightness * 93)
    }, [brightness])

    return (
        <div className="level rounded-sm bg-green-200 p-1 mt-3 overflow-hidden w-56 text-center mx-auto flex flex-col items-center">
            <div className="level__values">
                <code><sup>-</sup>3..2..1..0..1..2..<sup>+</sup>3</code>
            </div>
            <div className="level__mark rounded-sm bg-gray-900 w-3 h-4" style={{
                transform: `translateX(${translation}px)`
            }}></div>
            { JSON.stringify(brightness) }
        </div>
    )
}

export default Level
