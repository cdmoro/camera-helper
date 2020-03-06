import React, { FC } from 'react'
import { 
    isoSensitivity, 
    apertureDiaphragm,
    shutterSpeed
} from '../types/values.d'
import RangeControl from './RangeControl'
import { useDispatch } from 'react-redux'
import { SET_ISO, SET_APERTURE, SET_SHUTTER } from '../redux'
import Card from './Card'

const Controls: FC = () => {
    const dispatch = useDispatch();

    return (
        <div className="controls mx-auto" style={{ width: '700px' }}>
            <h1 className="text-4xl text-white text-shadow-md bold my-3">Photography exposure triangle</h1>
            <div className="flex text-left">
                <Card 
                    title="ISO"
                    description="Determines how sensitive your image sensor is. Hight ISO is more sensitive to light, but adds grain."
                >
                    <RangeControl
                        label="ISO"
                        values={isoSensitivity}
                        onChange={value => dispatch({
                            type: SET_ISO,
                            iso: value
                        })}
                    />
                </Card>
                <Card 
                    title="Aperture"
                    description="What is in or out focus. Determines the amount of light that gets in."
                >
                    <RangeControl
                        label="Aperture"
                        values={apertureDiaphragm}
                        onChange={value => dispatch({
                            type: SET_APERTURE,
                            aperture: value
                        })}
                    />
                </Card>
                <Card 
                    title="Shutter speed"
                    description="The lenght of time when the film or digital sensor inside the camera is exposed to light."
                >
                    <RangeControl
                        label="Shutter"
                        values={shutterSpeed}
                        onChange={value => dispatch({
                            type: SET_SHUTTER,
                            shutter: value
                        })}
                    />
                </Card>
            </div>
        </div>
    )
}

export default Controls
