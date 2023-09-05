import * as imagesApi from '../api'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/** 액션 */
export const FETCH_IMAGES = 'FETCH_IMAGES';
export const fetchImages = createAsyncThunk(
    FETCH_IMAGES,
    (page) => imagesApi.fetchImages(page)
);
 
const initialState = {
    loading: 'init',
    data: [],
    error: null,
}

const {reducer: imagesReducer} = createSlice({
    name: 'images',
    initialState,
    reducers: {},
    extraReducers: {
      [fetchImages.pending]: (state, action) => 
        ({...state, loading: 'pending' })
      ,
      [fetchImages.fulfilled]: (state, action) => 
        ({...state, loading: 'done', data: [...state.data].concat(...action.payload) })
      ,
      [fetchImages.rejected]: (state, action) => 
        ({...state, loading: 'rejected', error: action.error })
      ,
    },
})

export default imagesReducer;