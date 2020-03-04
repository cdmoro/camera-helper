import React, { FC, useState, useEffect } from 'react'
import { brightnessFactor } from '../utils/brightnessFactor'

const Camera: FC = () => {
    const [brightness, setBrightness] = useState(0);

    useEffect(() => {
        getBrightnessFactor()
    }, [])

    const getBrightnessFactor = async () => {
        setBrightness(await brightnessFactor('https://picsum.photos/id/101/500'))
    }

    return (
        <div className="camera">
            <h1 className="bg-gray-400 p-20">Camera</h1>
            <img src="https://picsum.photos/id/101/500" alt="Random" />
            <div>{ brightness }</div>
        </div>
    )
}

export default Camera
