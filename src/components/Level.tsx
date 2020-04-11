import React, { FC, useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../redux'

const Level: FC = () => {
    const brightness = useSelector((state: AppState) => state?.brightness)
    const correction = useSelector((state: AppState) => state?.correction)
    const [translation, setTranslation] = useState(0)
    const levelRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const translation = (brightness + correction - 1) * 56
        setTranslation(translation)

        levelRef.current?.classList.toggle('level--left-overflow', translation < -64)
        levelRef.current?.classList.toggle('level--right-overflow', translation > 64)

    }, [brightness, correction])

    return (
        <div 
            ref={levelRef}
            className="flex flex-col items-center p-3 pb-0 mx-auto overflow-hidden text-xs level"
        >
            <div className="relative level__values">
                <code>
                    <span className="level__min">3</span>
                    ..2..1..0..1..2..
                    <span className="level__max">3</span>
                </code>
            </div>
            <div className="w-3 h-4 bg-gray-900 rounded-sm level__mark" style={{
                transform: `translateX(${translation}px)`
            }}/>
        </div>
    )
}

export default Level
