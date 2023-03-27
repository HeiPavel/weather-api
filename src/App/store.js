import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/weather/weatherSlice';
import photoReducer from '../features/photo/photoSlice';
import notesReducer from '../features/notes/notesSlice';
import quoteReducer from '../features/quote/quoteSlice';

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        photo: photoReducer,
        notes: notesReducer,
        quote: quoteReducer
    }
});