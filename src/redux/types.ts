export const SET_BRIGHTNESS = 'SET_BRIGHTNESS'

export interface ICameraStore {
    brightness: number,
    iso: string,
    aperture: string,
    shutter: string
}

export interface SetBrightnessAction {
    type: typeof SET_BRIGHTNESS,
    brightness: number
}

export type AppActions = SetBrightnessAction