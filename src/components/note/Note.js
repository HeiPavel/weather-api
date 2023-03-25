import React from "react";
import { useDispatch } from "react-redux";
import { removeNote } from "../../features/notes/notesSlice";

export const Note = ({note, id}) => {
    const dispatch = useDispatch();

    const handleRemoveNote = () => {
        dispatch(removeNote(id));
    }

    return (
        <div className="note">
            <div className="note-container blur">
                <div className="button-container">
                    <div className="remove-button" onClick={() => handleRemoveNote()}>remove</div>
                    <div className="done-button">done</div>
                </div>
                <p>{note}</p>
            </div>
        </div>
    );
}