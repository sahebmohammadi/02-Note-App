function NoteList({ notes }) {
  return (
    <div className="note-list">
      {/* {Array.from({ length: 3 }, (_, i) => (
        <NoteItem key={i} />
      ))} */}
      {notes.map((note) => (
        <NoteItem key={note.id} />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem() {
  return (
    <div className="note-item">
      <div className="note-item__header">
        <div>
          <p className="title">client review and feedback</p>
          <p className="desc">crypto wallet redeisgn</p>
        </div>
        <input style={{ backgroundColor: "#fff" }} type="checkbox" name="" />
      </div>
      <p className="note-item__footer">Today : 10:00 PM</p>
    </div>
  );
}
