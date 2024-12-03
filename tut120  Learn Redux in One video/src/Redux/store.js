import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./Counter/CountSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
      },
})