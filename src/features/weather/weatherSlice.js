import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { sendCoordinats } from '../../util/weatherRequest';

export const loadData = createAsyncThunk('weather/loadData',
    async () => {
        const response = await sendCoordinats();
        return {
            city: `${response.data.name}, ${response.data.sys.country}`,
            temp: response.data.main.temp,
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure,
            wind: response.data.wind.speed,
            deg: response.data.wind.deg,
            weather: response.data.weather[0].main,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        }
    }
);

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: {
            city: '',
            temp: '',
            wind: '',
            deg: '',
            humidity: '',
            pressure: '',
            weather: '',
            icon: '',
            isLoading: false,
            isError: false
        },
        date: {
            day: '',
            month: '',
            weekday: '',
            hours: '',
            minutes: '',
            seconds: ''
        }
    },
    reducers: {
        addDate: (state, action) => {
            state.date = {...action.payload};
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadData.pending, state => {
            state.weather['isLoading'] = true;
            state.weather['isError'] = false;
        })
        .addCase(loadData.fulfilled, (state, action) => {
            state.weather = {...action.payload, isLoading: false, isError: false};
        })
        .addCase(loadData.rejected, state => {
            state.weather['isLoading'] = false;
            state.weather['isError'] = true;
        })
    }
});

export const selectWeather = (state) => state.weather.weather;
export const selectDate = (state) => state.weather.date;

export default weatherSlice.reducer;

export const {addDate} = weatherSlice.actions;