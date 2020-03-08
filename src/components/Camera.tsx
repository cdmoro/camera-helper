import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { brightnessFactor } from '../utils/brightnessFactor'
import Grid from './Grid';
// import Controls from './Controls';
import { AppState, SET_BRIGHTNESS, SET_CORRECTION } from '../redux';
import noise from '../assets/noise.png'
import Level from './Level';

const Camera: FC = () => {
    const dispatch = useDispatch();
    const [image, setImage] = useState('https://picsum.photos/300/225')
    const [brightness, setBrightness] = useState(1)
    const [showGrid, setShowGrid] = useLocalStorage('show-grid', true)
    const { iso, aperture, shutter } = useSelector((state: AppState) => ({
      iso: state.iso,
      aperture: state.aperture,
      shutter: state.shutter
    }))

    useEffect(() => {
      setBrightness(((iso / 9) + 1) - (aperture / 13))
      dispatch({
        type: SET_CORRECTION,
        correction: brightness
      })
    }, [iso, aperture, dispatch, brightness])

    useEffect(() => {
      const getBrightnessFactor = async (image: string) => {
        dispatch({
          type: SET_BRIGHTNESS,
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
        <div className="camera mx-auto" style={{ width: 573 }}>
          {/* <div className="camera__top bg-gray-800 rounded-t-lg ml-20 flex justify-center items-center" style={{ width: 160, height: 60 }}>
                    <div className="rounded-md bg-black w-16 h-10"></div>
                </div> */}
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
                    style={{
                      filter: `brightness(${brightness}) blur(${((shutter * 3) / 9)}px)`
                    }}
                  />
                  <img
                    className="absolute h-full w-full top-0"
                    src={noise}
                    alt="Noise"
                    style={{
                      opacity: iso / 8
                    }}
                  />
                  <Grid show={showGrid} />
                </div>
              </div>

              <div className="camera__controls ml-3 text-left flex flex-col">

                <div className="text-white mb-2">
                  <p>In no way does this page try to be accurate about photography.</p>
                  <p>I made it for educational purposes and for those who want to understand how to take a good picture.</p>
                </div>

                <Level/>

                {/* <Controls /> */}
              </div>
            </div>
          </div>
        </div>
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
      </div>
    )
}

export default Camera
