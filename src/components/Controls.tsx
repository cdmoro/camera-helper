import React, { FC } from 'react'
import { 
    isoSensitivity, 
    apertureDiaphragm,
    shutterSpeed
} from '../types/values.d'
import RangeControl from './RangeControl'
import { useDispatch } from 'react-redux'
import { SET_ISO, SET_APERTURE, SET_SHUTTER } from '../redux'

const Controls: FC = () => {
    const dispatch = useDispatch();

    return (
        <div className="controls">
            <RangeControl
                label="ISO"
                values={isoSensitivity}
                onChange={value => dispatch({
                    type: SET_ISO,
                    iso: value
                })}
            />
            
            <RangeControl
                label="Aperture"
                values={apertureDiaphragm}
                onChange={value => dispatch({
                    type: SET_APERTURE,
                    aperture: value
                })}
            />
            
            <RangeControl
                label="Shutter"
                values={shutterSpeed}
                onChange={value => dispatch({
                    type: SET_SHUTTER,
                    shutter: value
                })}
            />
        </div>
    )
}

export default Controls
