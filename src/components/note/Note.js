import React from "react";
import { useDispatch } from "react-redux";
import { removeNote, toogleNote } from "../../features/notes/notesSlice";

export const Note = ({note, id, isDone}) => {
    const dispatch = useDispatch();

    const handleRemoveNote = () => {
        dispatch(removeNote(id));
    }

    const handleTogleNote = () => {
        dispatch(toogleNote(id));
    }

    return (
        <div className="note">
            <div className={isDone ? "note-container done" : "note-container"}>
                <p>{note}</p>
            </div>
            <div className={isDone ? "button-container done" : "button-container"} translate="no">
                <div className="remove-button" onClick={() => handleRemoveNote()}>remove</div>
                <div className="done-button" onClick={() => {handleTogleNote()}}>{isDone ? 'keep' : 'done'}</div>
            </div>
        </div>
    );
}