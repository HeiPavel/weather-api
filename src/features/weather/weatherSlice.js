import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { sendCoordinats } from '../../util/weatherRequest';

export const loadData = createAsyncThunk('weather/loadData',
    async () => {
        const response = await sendCoordinats();
        const region = new Intl.DisplayNames(['en'], { type: 'region' });
        return {
            city: `${response.data.name}, ${region.of(response.data.sys.country)}`,
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
            isLoading: false
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
            for (const key in state.date) {
                state.date[key] = action.payload[key];
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadData.pending, state => {
            state.weather['isLoading'] = true;
        })
        .addCase(loadData.fulfilled, (state, action) => {
            for (const key in state.weather) {
                (key !== 'isLoading') ? state.weather[key] = action.payload[key] : state.weather['isLoading'] = false;
            }
        })
    }
});

export const selectWeather = (state) => state.weather.weather;
export const selectDate = (state) => state.weather.date;

export default weatherSlice.reducer;

export const {addDate} = weatherSlice.actions;