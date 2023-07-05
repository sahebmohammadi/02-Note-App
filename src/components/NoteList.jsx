import { TrashIcon } from "@heroicons/react/24/outline";

function NoteList({ notes, setNotes }) {
  const handleComplete = (e) => {
    const newNotes = notes.map((note) => {
      return note.id === Number(e.target.value)
        ? { ...note, completed: !note.completed }
        : note;
    });
    setNotes(newNotes);
  };

  const handleRemove = (id) => {
    const filteredNotes = notes.filter((note) => Number(note.id) !== id);
    setNotes(filteredNotes);
  };

  return (
    <div className="note-list">
      {/* {Array.from({ length: 3 }, (_, i) => (
        <NoteItem key={i} />
      ))} */}
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onComplete={handleComplete}
          onRemove={() => handleRemove(note.id)}
        />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note, onComplete, onRemove }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={onRemove}>
            <TrashIcon className="trash" />
          </button>
          <input
            type="checkbox"
            name={note.id}
            value={note.id}
            onChange={onComplete}
          />
        </div>
      </div>
      <p className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </p>
    </div>
  );
}
