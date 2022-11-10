import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  url: {'homePage': 'http://www.iamwuwei.com'},
}

export const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    setUrl: (state, action) => {
        state.url += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setHomPageUrl } = urlSlice.actions
export const selectHomePageUrl = state => state.url.url.homePage

export default urlSlice.reducer