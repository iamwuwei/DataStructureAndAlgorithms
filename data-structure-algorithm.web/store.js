import { configureStore } from '@reduxjs/toolkit'
import urlReducer from './slices/urlSlice'

export default configureStore({
  reducer: {
    url: urlReducer,
  }
})