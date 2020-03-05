import React, { FC, useState } from 'react'

interface Props {
    label: string,
    initialValue?: string,
    values: string[]
}

const RangeControl: FC<Props> = ({ label, initialValue = '0', values }) => {
    const [value, setValue] = useState(initialValue)

    return (
        <div className="text-left text-white">
            <div className="flex justify-between">
                <label>{ label }</label>
                <output>{ values[parseInt(value)] }</output>
            </div>
            <input 
                type="range" 
                min="0" 
                max={values.length - 1} 
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </div>
    )
}

export default RangeControl
