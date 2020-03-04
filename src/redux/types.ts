export const SET_BRIGHTNESS = 'SET_BRIGHTNESS'

export interface ICameraStore {
    brightness: number
}

export interface SetBrightnessAction {
    type: typeof SET_BRIGHTNESS,
    brightness: number
}

export type AppActions = SetBrightnessAction