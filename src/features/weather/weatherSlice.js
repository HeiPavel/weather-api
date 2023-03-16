import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { sendCoordinats } from '../../util/weatherRequest';

export const loadData = createAsyncThunk('weather/loadData',
    async () => {
        const response = await sendCoordinats();
        console.log(response);
        const region = new Intl.DisplayNames(['en'], { type: 'region' });
        return {
            city: `${response.data.name}, ${region.of(response.data.sys.country)}`,
            temp: response.data.main.temp,
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure,
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
        humidity: '',
        pressure: '',
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