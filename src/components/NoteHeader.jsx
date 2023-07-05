function NoteHeader({ notes }) {
  return (
    <div className="note-header">
      <h1>My Notes ({notes.length})</h1>
      <select name="" id="" placeholder="sort based on ...">
        <option value="date">Sort based on Date</option>
        <option value="completed">Sort based on Completed</option>
      </select>
    </div>
  );
}

export default NoteHeader;
