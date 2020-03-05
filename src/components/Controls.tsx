import React, { FC } from 'react'
import { 
    isoSensitivity, 
    apertureDiaphragm,
    shutterSpeed
} from '../types/values.d'
import RangeControl from './RangeControl'

const Controls: FC = () => {
    return (
        <div className="controls">
            <RangeControl
                label="ISO"
                values={isoSensitivity}
            />
            
            <RangeControl
                label="Aperture"
                values={apertureDiaphragm}
            />
            
            <RangeControl
                label="Shutter"
                values={shutterSpeed}
            />
        </div>
    )
}

export default Controls
