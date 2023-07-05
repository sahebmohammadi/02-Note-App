function NoteHeader() {
  return (
    <div className="note-header">
      <h1>My Notes (8)</h1>
      <select name="" id="" placeholder="sort based on ...">
        <option value="date">Sort based on Date</option>
        <option value="completed">Sort based on Completed</option>
      </select>
    </div>
  );
}

export default NoteHeader;
