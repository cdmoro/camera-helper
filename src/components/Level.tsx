import React, { FC, useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../redux'

const Level: FC = () => {
    const brightness = useSelector((state: AppState) => state?.brightness)
    const correction = useSelector((state: AppState) => state?.correction)
    const [translation, setTranslation] = useState(0)
    const levelRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const translation = (brightness + correction - 1) * 81
        setTranslation(translation)

        levelRef.current?.classList.toggle('level--left-overflow', translation < -88)
        levelRef.current?.classList.toggle('level--right-overflow', translation > 88)

    }, [brightness, correction])

    return (
        <div 
            ref={levelRef}
            className="level rounded-sm md:bg-green-200 p-1 md:mt-3 py-1 overflow-hidden text-center mx-auto flex flex-col items-center"
        >
            <div className="level__values relative">
                <code>
                    <span className="level__min">3</span>
                    ..2..1..0..1..2..
                    <span className="level__max">3</span>
                </code>
            </div>
            <div className="level__mark rounded-sm bg-gray-900 w-3 h-4" style={{
                transform: `translateX(${translation}px)`
            }}/>
        </div>
    )
}

export default Level
