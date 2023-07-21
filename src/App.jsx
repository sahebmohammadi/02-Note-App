import "./App.css";
import AddNewNote from "./components/AddNewNote";

function App() {
  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote />
        <div className="note-container">notes</div>
      </div>
    </div>
  );
}

export default App;
