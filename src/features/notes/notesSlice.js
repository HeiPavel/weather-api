import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    note: '',
    notes: []
};

export const notesSlice = createSlice({
    name: 'notes',
    initialState: initialState,
    reducers: {
        createNote: (state, action) => {
            state.note = action.payload;
        },
        addNote: (state, action) => {
            state.notes.push(action.payload);
        }
    }
});

export const selectNote = state => state.notes.note;
export const selectNotes = state => state.notes.notes;

export default notesSlice.reducer;

export const {createNote, addNote} = notesSlice.actions;