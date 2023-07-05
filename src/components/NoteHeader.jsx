function NoteHeader({ notes, sortBy, onSort }) {
  return (
    <div className="note-header">
      <h1>My Notes ({notes.length})</h1>
      <select value={sortBy} onChange={onSort} placeholder="sort based on ...">
        <option value="latest">Sort based on latest</option>
        <option value="earliest">Sort based on earliest</option>
        <option value="completed">Sort based on completed</option>
      </select>
    </div>
  );
}

export default NoteHeader;
