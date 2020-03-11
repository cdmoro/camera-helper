import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderOpen, faCamera, faRandom, faBorderAll, faBorderNone } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from 'react-redux';

import { useLocalStorage } from '../hooks/useLocalStorage';
import { brightnessFactor } from '../utils/brightnessFactor';
import Grid from './Grid';
import { AppState, SET_BRIGHTNESS, SET_CORRECTION } from '../redux';
import noise from '../assets/noise.png';
import Level from './Level';

const Camera: FC = () => {
    const dispatch = useDispatch();
    const [image, setImage] = useState('')
    const [brightness, setBrightness] = useState(1)
    const [showGrid, setShowGrid] = useLocalStorage('show-grid', true)
    const { iso, aperture, shutter } = useSelector((state: AppState) => ({
      iso: state.iso,
      aperture: state.aperture,
      shutter: state.shutter
    }))

    useEffect(() => {
      setImage('https://picsum.photos/300/225')
    }, [])

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
        <div className="camera mx-auto" style={{ maxWidth: 573 }}>
          {/* <div className="camera__top bg-gray-800 rounded-t-lg ml-20 flex justify-center items-center" style={{ width: 160, height: 60 }}>
                    <div className="rounded-md bg-black w-16 h-10"></div>
                </div> */}
          <div className="camera__body md:bg-gray-800 p-4 md:pt-4 pt-0 rounded-lg">
            <div className="camera__body-frame flex flex-col md:flex-row bg-white md:bg-transparent rounded-sm shadow-sm">
              <div className="camera__screen-frame md:border-2 border-1 border-black md:bg-gray-900 md:rounded-md rounded-sm p-4 pb-0 md:pb-4">
                <div
                  className="camera__screen overflow-hidden relative rounded-sm mx-auto"
                  style={{ width: 300, height: 225 }}
                >
                  <img
                    src={image}
                    alt="Camera screen preview"
                    style={{
                      filter: `brightness(${brightness}) blur(${aperture / 9}px)`,
                    }}
                    // style={{
                    //   filter: `brightness(${brightness}) blur(${((shutter * 3) / 9)}px)`
                    // }}
                  />
                  <img
                    className="absolute top-0 transition ease-in-out duration-100"
                    src={image}
                    alt="Shutter phantom effect"
                    style={{
                      filter: `blur(1px)`,
                      transform: 'translate(2px, 2px)',
                      opacity: shutter / 15
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

              <div className="camera__controls md:ml-3 text-left flex flex-col">

                <div className="text-white md:mb-2 mt-3 md:mt-0 text-sm md:text-base hidden md:block">
                  <p>In no way does this page try to be accurate about photography.</p>
                  <p>I made it for educational purposes and for those who want to understand how to take a good picture.</p>
                </div>

                <Level/>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="border-t-2 border-purple-600 md:border-none fixed bottom-0 flex left-0 right-0 bg-white justify-around md:static md:bg-transparent md:shadow-none md:justify-center md:mt-3 p-2 md:p-0 z-10 md:z-0"
        >

          <button
            className="btn-control"
            title="Show/hide grid"
            onClick={() => setShowGrid(!showGrid)}
          >
            <FontAwesomeIcon className="fa-2x md:fa-1x" icon={showGrid ? faBorderNone : faBorderAll} />
            <span className="hidden md:inline-block">{`${showGrid ? "Hide" : "Show"} grid`}</span>
          </button>

          <button 
            className="btn-control" 
            title="Open image"
            onClick={() => document.getElementById('img-upload')?.click()}
          >
            <FontAwesomeIcon className="fa-2x md:fa-1x" icon={faFolderOpen} />
            <span className="hidden md:inline-block">Open image</span>
          </button>
          <input id="img-upload" type="file" hidden onChange={handleImageUpload} accept="image/*" />

          { /Mobi|Android/i.test(navigator.userAgent) &&
            <>
              <button 
                className="btn-control" 
                title="Take a picture"
                onClick={() => document.getElementById('take-picture')?.click()}
              >
                <FontAwesomeIcon className="fa-2x md:fa-1x" icon={faCamera} />
                <span className="hidden md:inline-block">Take a picture</span>
              </button>
              <input id="take-picture" type="file" hidden onChange={handleImageUpload} accept="image/*;capture=camera"></input>
            </>
          }

          <button
            className="btn-control"
            title="Random image"
            onClick={() =>
              setImage(
                `https://picsum.photos/id/${Math.floor(
                  Math.random() * 100
                )}/300/225`
              )
            }
          >
            <FontAwesomeIcon className="fa-2x md:fa-1x" icon={faRandom} />
            <span className="hidden md:inline-block">Random image</span>
          </button>
        </div>
      </div>
    )
}

export default Camera
