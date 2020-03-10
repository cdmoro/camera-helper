import React, { FC } from 'react'
import { 
    isoSensitivity, 
    apertureDiaphragm,
    shutterSpeed
} from '../types/values.d'
import RangeControl from './RangeControl'
import { useDispatch, useSelector } from 'react-redux'
import { SET_ISO, SET_APERTURE, SET_SHUTTER, AppState } from '../redux'
import Card from './Card'

const Controls: FC = () => {
    const dispatch = useDispatch();
    const { iso, aperture, shutter } = useSelector((state: AppState) => ({
      iso: state.iso,
      aperture: state.aperture,
      shutter: state.shutter
    }))

    return (
      <div className="controls md:mt-5">
        {/* <h1 className="text-4xl text-white text-shadow-md bold my-3">Give it a shot, cowboy!</h1> */}
        <div className="flex text-left justify-center md:flex-row flex-col">
          <Card description="Determines how sensitive your image sensor is. Hight ISO is more sensitive to light, but adds grain.">
            <RangeControl
              label="ISO"
              initialValue={iso}
              values={isoSensitivity}
              onChange={value =>
                dispatch({
                  type: SET_ISO,
                  iso: value
                })
              }
            />
          </Card>
          <Card description="What is in or out focus. Determines the amount of light that gets in.">
            <RangeControl
              label="Aperture"
              initialValue={aperture}
              values={apertureDiaphragm}
              onChange={value =>
                dispatch({
                  type: SET_APERTURE,
                  aperture: value
                })
              }
            />
          </Card>
          <Card description="The lenght of time when the film or digital sensor inside the camera is exposed to light.">
            <RangeControl
              label="Shutter"
              initialValue={shutter}
              values={shutterSpeed}
              onChange={value =>
                dispatch({
                  type: SET_SHUTTER,
                  shutter: value
                })
              }
            />
          </Card>
        </div>
      </div>
    )
}

export default Controls
