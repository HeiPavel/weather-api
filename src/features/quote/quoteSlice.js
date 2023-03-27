import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchQuote } from "../../util/quoteRequest";

export const loadQuote = createAsyncThunk('quote/loadQuote',
    async () => {
        const response = await fetchQuote();
        return {
            quote: response.data[0].quote,
            author: response.data[0].author
        };
    }
);

export const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        quote: {
            quote: '',
            author: ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadQuote.fulfilled, (state, action) => {
            state.quote = {...action.payload};
        })
    }
});

export const selectQuote = (state) => state.quote.quote;

export default quoteSlice.reducer;