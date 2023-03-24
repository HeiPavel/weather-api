import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createNote, addNote } from "../../features/notes/notesSlice";
import { selectNote } from "../../features/notes/notesSlice";
import { Notes } from "../notes/Notes";

export const NotesForm = () => {
    const dispatch = useDispatch();
    const note = useSelector(selectNote);

    const handleCreateNote = (event) => {
        dispatch(createNote(event.target.value));
    }

    const handleAddNote = (event) => {
        event.preventDefault();
        if (note.length === 0) {
            return;
        }
        dispatch(addNote(note));
        dispatch(createNote(''));
    }

    return (
        <div className="notes-container blur">
            <form onSubmit={handleAddNote}>
                <input 
                    type="text"
                    placeholder="Create a note"
                    value={note}
                    onChange={(event) => handleCreateNote(event)}
                />
                <button>Add</button>
            </form>
            <div className="tasks">
                <Notes />
            </div>
        </div>
    );
}