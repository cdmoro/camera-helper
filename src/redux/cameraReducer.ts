import { 
    ICameraStore, 
    AppActions, 
    SET_BRIGHTNESS 
} from "./types"

const initialState: ICameraStore = {
    brightness: 0
}

export const cameraReducer = (state = initialState, action: AppActions): ICameraStore => {
    switch(action.type) {
        case SET_BRIGHTNESS:
            return {
                ...state,
                brightness: action.brightness
            }
    }
}