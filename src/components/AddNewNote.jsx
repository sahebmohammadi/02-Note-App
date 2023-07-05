import { useState } from "react";

function AddNewNote({ setNotes }) {
  const [title, setTtile] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { title, description, id: Date.now(), completed: false };
    setNotes((notes) => [...notes, newNote]);
    setTtile("");
    setDescription("");
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          className="text-field"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTtile(e.target.value)}
          placeholder="note title ..."
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-field"
          type="text"
          name="desc"
          placeholder="note description ..."
        />
        <button className="btn btn--primary" type="submit">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
