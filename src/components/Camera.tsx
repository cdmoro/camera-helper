import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import { brightnessFactor } from '../utils/brightnessFactor'
import { useDispatch } from 'react-redux';
import Grid from './Grid';

const Camera: FC = () => {
    const dispatch = useDispatch();
    const [image, setImage] = useState('https://picsum.photos/300/225');
    const [showGrid, setShowGrid] = useState(false)

    useEffect(() => {
        setShowGrid(JSON.parse(localStorage.getItem('show-grid')!) || false)
    }, [])

    useEffect(() => {
        localStorage.setItem('show-grid', JSON.stringify(showGrid))
    }, [showGrid])

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
        <div className="camera mx-auto" style={{ width: 525 }}>
          <div className="camera__top bg-gray-800 rounded-t-lg ml-20 flex justify-center items-center" style={{ width: 160, height: 60 }}>
                    <div className="rounded-md bg-black w-16 h-10"></div>
                </div>
          <div className="camera__body bg-gray-800 p-4 rounded-lg">
            <div className="camera__body-frame flex">
              <div className="camera__screen-frame border-2 border-black bg-gray-900 rounded-md p-4">
                <div
                  className="camera__screen overflow-hidden relative"
                  style={{ width: 300, height: 225 }}
                >
                  <img
                    className="rounded-sm"
                    src={image}
                    alt="Camera screen preview"
                  />
                  <Grid show={showGrid} />
                </div>
              </div>

              <div className="camera__controls ml-3 text-left">
                <button
                  className="btn-control"
                  onClick={() => setShowGrid(!showGrid)}
                >
                  {`${showGrid ? "Hide" : "Show"} grid`}
                </button>

                <button className="btn-control" onClick={() => document.getElementById('img-upload')?.click()}>Upload image</button>
                <input id="img-upload" type="file" hidden onChange={handleImageUpload} accept="image/*" />

                <button
                  className="btn-control"
                  title="Images provided by picsum.photos!"
                  onClick={() =>
                    setImage(
                      `https://picsum.photos/id/${Math.floor(
                        Math.random() * 100
                      )}/300/225`
                    )
                  }
                >
                  Random image
                </button>
                {/* <label>
                  <input
                    type="checkbox"
                    checked={showGrid}
                    onChange={event => setShowGrid(event.target.checked)}
                  />
                  Show grid
                </label> */}
              </div>
            </div>
            {/* <div className="camera__footer mt-5">
              <input type="file" onChange={handleImageUpload} />
            </div> */}
          </div>
        </div>
      </div>
    )
}

export default Camera
