import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const postData = await response.json();
        return postData;
    }
)

export const postSlice = createSlice({
    name: 'allPosts',
    initialState: {
        posts: [],
        isLoading: false,
    },
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.isLoading = true
        },
        [getPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false
        },
        [getPosts.rejected]: (state) => {
            state.isLoading = false
        }
    }
})

export default postSlice.reducer