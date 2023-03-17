import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/weather/weatherSlice';
import photoReducer from '../features/photo/photoSlice';

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        photo: photoReducer
    }
});