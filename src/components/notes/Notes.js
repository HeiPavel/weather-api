import React from "react";
import { useSelector } from "react-redux";
import { selectNotes } from "../../features/notes/notesSlice";
import { Note } from "../note/Note";

export const Notes = () => {
    const notes = useSelector(selectNotes);

    return (
        <>
            {notes.map((note, index) => {
                return (
                    <Note
                        key={index}
                        note={note}
                    />
                );
            })}
        </>
    );
}