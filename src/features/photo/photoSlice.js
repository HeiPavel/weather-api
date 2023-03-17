import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { fetchPhoto } from '../../util/photoRequest';

export const loadPhoto = createAsyncThunk('photo/loadPhoto',
    async () => {
        const response = await fetchPhoto();
        return response.data.urls.regular;
    }
);

export const photoSlice = createSlice({
    name: 'photo',
    initialState: {
        url: ''
    },
    extraReducers: {
        [loadPhoto.fulfilled] : (state, action) => {
            state.url = action.payload;
        }
    }
});

export const selectPhoto = (state) => state.photo;

export default photoSlice.reducer;