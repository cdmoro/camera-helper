import { 
    ICameraStore, 
    SET_BRIGHTNESS, 
    SET_ISO,
    SET_SHUTTER,
    SET_APERTURE,
    SET_CORRECTION
} from "./types"

import { AppActions } from "./actions"

const initialState: ICameraStore = {
    brightness: 0,
    correction: 0,
    iso: 0,
    aperture: 3,
    shutter: 0
}

export const cameraReducer = (state = initialState, action: AppActions): ICameraStore => {
    switch(action.type) {
        case SET_BRIGHTNESS: {
            return {
                ...state,
                brightness: action.brightness
            }
        }
        case SET_CORRECTION: {
            return {
                ...state,
                correction: action.correction
            }
        }
        case SET_ISO: {
            return {
                ...state,
                iso: action.iso
            }
        }
        case SET_APERTURE: {
            return {
                ...state,
                aperture: action.aperture
            }
        }
        case SET_SHUTTER: {
            return {
                ...state,
                shutter: action.shutter
            }
        }
        default: {
            return state
        }
    }
}