import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import { brightnessFactor } from '../utils/brightnessFactor'
import { useDispatch } from 'react-redux';
import Grid from './Grid';

const Camera: FC = () => {
    const dispatch = useDispatch();
    const [image, setImage] = useState('https://picsum.photos/id/101/300/225');
    const [showGrid, setShowGrid] = useState(true)

    useEffect(() => {
        const getBrightnessFactor = async (image: string) => {
            dispatch({
                type: 'SET_BRIGHTNESS',
                brightness: await brightnessFactor(image)
            })
        }

        getBrightnessFactor(image)
    }, [image, dispatch])

    const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
        const img: File = event.target.files![0]
        setImage(URL.createObjectURL(img))
    }

    return (
        <div className="camera-container">
            <div className="camera">
                {/* <div className="camera__top bg-gray-800 rounded-t-lg ml-20 flex justify-center items-center" style={{ width: 170, height: 70 }}>
                    <div className="rounded-md bg-black w-16 h-10"></div>
                </div> */}
                <div className="camera__body bg-gray-800 p-4 rounded-lg" style={{ width: 480 }}>
                    <div className="camera__body-frame flex">
                        <div className="camera__screen-frame border-2 border-black bg-gray-900 rounded-md p-4">
                            <div className="camera__screen overflow-hidden relative" style={{ width: 300, height: 225 }}>
                                <img
                                    className="rounded-sm"
                                    src={image}
                                    alt="Camera screen preview"
                                />
                                <Grid show={showGrid} />
                            </div>
                        </div>
                        <div className="camera__controls">
                            <label>
                                <input 
                                    type="checkbox" 
                                    checked={showGrid} 
                                    onChange={event => setShowGrid(event.target.checked)}
                                />
                                Show grid
                            </label>
                        </div>
                    </div>
                    <div className="camera__footer mt-5">
                        <input type="file" onChange={handleImageUpload} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Camera
