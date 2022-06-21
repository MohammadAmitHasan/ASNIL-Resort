import { combineReducers, configureStore } from '@reduxjs/toolkit'
import users from './userSlice'
import counter from './counterSlice'
import openLogin from './openLogin'
import allPosts from './loadPost'
// import { createWrapper } from 'next-redux-wrapper'

const combinedReducer = combineReducers({
    counter,
    users,
    openLogin,
    allPosts,
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

