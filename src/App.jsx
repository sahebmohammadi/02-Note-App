import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteHeader from "./components/NoteHeader";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  let sortedNotes = notes;

  if (sortBy === "latest")
    sortedNotes = notes
      .slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); //  a > b ? -1 : 1

  if (sortBy === "earliest")
    sortedNotes = notes
      .slice()
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)); //  a > b ? 1 : -1

  if (sortBy === "completed")
    sortedNotes = notes
      .slice()
      .sort((a, b) => Number(a.completed) - Number(b.completed)); // 0, 0, 1, 1


  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote setNotes={setNotes} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList notes={sortedNotes} setNotes={setNotes} />
        </div>
      </div>
    </div>
  );
}

export default App;
