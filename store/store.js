import { combineReducers, configureStore } from '@reduxjs/toolkit'
import users from './userSlice'
import counter from './counterSlice'
import loginForm from './openLogin'
import { createWrapper } from 'next-redux-wrapper'

const combinedReducer = combineReducers({
    counter,
    users,
    loginForm,
})

// export const makeStore = () => {
//     return configureStore({
//         reducer: combinedReducer,
//     })
// }

// export const wrapper = createWrapper(makeStore)

export const makeStore = configureStore({
    reducer: combinedReducer,
})

