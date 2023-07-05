import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteHeader from "./components/NoteHeader";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <div className="container">
      <NoteHeader  />
      <div className="note-app">
        <AddNewNote setNotes={setNotes} />
        <div className="note-container">
          <NoteStatus />
          <NoteList notes={notes} />
        </div>
      </div>
    </div>
  );
}

export default App;
