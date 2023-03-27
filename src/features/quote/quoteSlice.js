import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchQuote } from "../../util/quoteRequest";

export const loadQuote = createAsyncThunk('quote/loadQuote',
    async () => {
        const response = await fetchQuote();
        return {
            quote: response.data.content,
            author: response.data.author
        };
    }
);

export const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        quote: {
            quote: '',
            author: '',
            isLoading: false,
            isError: false
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadQuote.pending, state => {
            state.quote.isLoading = true;
            state.quote.isError = false;
        })
        .addCase(loadQuote.fulfilled, (state, action) => {
            state.quote = {...action.payload, isLoading: false, isError: false};
        })
        .addCase(loadQuote.rejected, state => {
            state.quote.isLoading = false;
            state.quote.isError = true;
        })
    }
});

export const selectQuote = (state) => state.quote.quote;

export default quoteSlice.reducer;