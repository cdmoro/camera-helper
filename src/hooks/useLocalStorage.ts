import { useState } from "react"

export const useLocalStorage = (key: string, initialValue: any) => {
    const [value, _setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })

    const setValue = (value: any) => {
        try {
            _setValue(value)
            window.localStorage.setItem(
                key,
                JSON.stringify(value)
            )
        } catch (error) {
            
        }
    }

    return [
        value,
        setValue
    ]
}