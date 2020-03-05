import { SET_BRIGHTNESS, SET_ISO, SET_APERTURE, SET_SHUTTER } from "./types";

export interface SetBrightnessAction {
    type: typeof SET_BRIGHTNESS,
    brightness: number
}

export interface SetISOAction {
    type: typeof SET_ISO,
    iso: number
}

export interface SetApertureAction {
    type: typeof SET_APERTURE,
    aperture: number
}

export interface SetShutterAction {
    type: typeof SET_SHUTTER,
    shutter: number
}

export type AppActions = 
    | SetBrightnessAction 
    | SetISOAction 
    | SetApertureAction 
    | SetShutterAction