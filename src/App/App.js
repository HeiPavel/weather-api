import React from "react";
import { Weather } from "../components/weather/Weather";
import { NotesForm } from "../components/notesForm/NotesForm";
import { Background } from "../components/background/Background";

function App() {
  
  return (
    <>
      <Background />
      <Weather />
      <NotesForm />
    </>
  );
}

export default App;
