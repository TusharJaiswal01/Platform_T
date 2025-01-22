import { configureStore } from '@reduxjs/toolkit'
import industryData from '../redux/industryData'


export const store = configureStore({
  reducer: {
    data: industryData,
  },
})