import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { fetchPhoto } from '../../util/photoRequest';

export const loadPhoto = createAsyncThunk('photo/loadPhoto',
    async () => {
        const index = Math.floor(Math.random() * 30);
        const response = await fetchPhoto();
        return response.data.results[index].urls.regular;
    }
);

export const photoSlice = createSlice({
    name: 'photo',
    initialState: {
        url: ''
    },
    extraReducers: (builder) =>  {
        builder
        .addCase(loadPhoto.fulfilled, (state, action) => {
            state.url = action.payload;
        })
    }
});

export const selectPhoto = (state) => state.photo;

export default photoSlice.reducer;