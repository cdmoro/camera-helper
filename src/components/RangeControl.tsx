import React, { FC, useState, ChangeEvent } from 'react'

interface Props {
    label: string,
    initialValue?: number,
    values: string[],
    onChange?: (value: number) => void
}

const RangeControl: FC<Props> = ({ label, initialValue = 0, values, onChange = value => {} }) => {
    const [value, setValue] = useState(initialValue)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value)
        setValue(value);
        onChange(value);
    }

    return (
        <div className="text-left">
            <div className="flex justify-between">
                <label>{ label }</label>
                <output>{ values[value] }</output>
            </div>
            <input 
                className="w-full slider"
                type="range" 
                min="0" 
                max={values.length - 1} 
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default RangeControl
