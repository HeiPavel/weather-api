import React from "react";
import { Weather } from "../components/weather/Weather";
import { NotesForm } from "../components/notesForm/NotesForm";
import { Background } from "../components/background/Background";
import { Quote } from "../components/quote/Quote";

function App() {
  
  return (
    <>
      <Background />
      <Weather />
      <NotesForm />
      <Quote />
    </>
  );
}

export default App;
