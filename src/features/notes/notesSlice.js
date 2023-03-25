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
            state.notes.push({...action.payload, isDone: false});
        },
        removeNote: (state, action) => {
            const notes = state.notes.filter(note => note.id !== action.payload);
            state.notes = [...notes];
        },
        toogleNote: (state, action) => {
            const note = state.notes.find(note => note.id === action.payload);
            note.isDone = !note.isDone;
        }
    }
});

export const selectNote = state => state.notes.note;
export const selectNotes = state => state.notes.notes;

export default notesSlice.reducer;

export const {createNote, addNote, removeNote, toogleNote} = notesSlice.actions;