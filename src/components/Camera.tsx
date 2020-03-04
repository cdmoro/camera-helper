import React, { FC, useState, useEffect } from 'react'
import { brightnessFactor } from '../utils/brightnessFactor'
import Level from './Level';

const Camera: FC = () => {
    const [brightness, setBrightness] = useState(0);

    useEffect(() => {
        getBrightnessFactor()
    }, [])

    const getBrightnessFactor = async () => {
        setBrightness(await brightnessFactor('https://picsum.photos/id/101/300/225'))
    }

    return (
        <div className="camera-1">
            <h1 className="bg-gray-400">Camera</h1>
            <div className="camera">
                <div className="camera__top bg-gray-800 rounded-t-lg ml-20 flex justify-center items-center" style={{ width: 170, height: 70 }}>
                    <div className="rounded-md bg-black w-16 h-10"></div>
                </div>
                <div className="camera__body bg-gray-800 p-4 flex rounded-lg" style={{ width: 480 }}>
                    <div className="camera__screen-frame border-2 border-black bg-gray-900 rounded-md p-4">
                        <div className="camera__screen" style={{ width: 300, height: 225 }}>
                            <img 
                                className="rounded-sm"
                                src="https://picsum.photos/id/101/300/225" 
                                alt="Random"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Level level={brightness}></Level>
        </div>
    )
}

export default Camera
