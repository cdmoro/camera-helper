import { createStore } from 'redux'
import { cameraReducer } from './cameraReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export type AppState = ReturnType<typeof cameraReducer>

export const store = createStore(
    cameraReducer,
    composeWithDevTools()
)