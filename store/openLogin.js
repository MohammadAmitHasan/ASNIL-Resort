import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: false }

export const openLogin = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        change: (state) => {
            state.value = !state.value
        },
    },
})

export const { change } = openLogin.actions
export default openLogin.reducer