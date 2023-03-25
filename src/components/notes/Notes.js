import React from "react";
import { useSelector } from "react-redux";
import { selectNotes } from "../../features/notes/notesSlice";
import { Note } from "../note/Note";

export const Notes = () => {
    const notes = useSelector(selectNotes);

    return (
        <div className="tasks">
            {notes.map((note) => {
                return (
                    <Note
                        key={note.id}
                        id={note.id}
                        note={note.note}
                    />
                );
            })} 
        </div>
    );
}