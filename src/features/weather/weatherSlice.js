import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { sendCoordinats } from '../../util/weatherRequest';

export const loadData = createAsyncThunk('weather/loadData',
    async () => {
        const response = await sendCoordinats();
        console.log(response);
        return {
            city: response.data.name,
            temp: response.data.main.temp,
            wind: Math.ceil(response.data.wind.speed),
            weather: response.data.weather[0].main,
            icon: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`
        }
    }
);

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        city: '',
        temp: '',
        wind: '',
        weather: '',
        icon: ''
    },
    extraReducers: {
        [loadData.fulfilled]: (state, action) => {
            for (const key in state) {
                state[key] = action.payload[key];
            }
        }
    }
});

export const selectWeather = (state) => state.weather;

export default weatherSlice.reducer;