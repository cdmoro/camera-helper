import React, { FC, useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../redux'

const Level: FC = () => {
    const brightness = useSelector((state: AppState) => state?.brightness)
    const [translation, setTranslation] = useState(0)
    const levelRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const translation = brightness * 81
        setTranslation(translation)

        levelRef.current?.classList.toggle('level--left-overflow', translation < -81)
        levelRef.current?.classList.toggle('level--right-overflow', translation > 81)

    }, [brightness])

    return (
        <div 
            ref={levelRef}
            className="level rounded-sm bg-green-200 p-1 mt-3 overflow-hidden text-center mx-auto flex flex-col items-center"
        >
            <div className="level__values">
                <code>
                    <span className="level__min">3</span>
                    ..2..1..0..1..2..
                    <span className="level__max">3</span>
                </code>
            </div>
            <div className="level__mark rounded-sm bg-gray-900 w-3 h-4" style={{
                transform: `translateX(${translation}px)`
            }}></div>
            {/* { JSON.stringify(brightness) } */}
        </div>
    )
}

export default Level
