import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function handleClick(note) {
    setNotes((prevNote) => {
      return [...prevNote, note];
    });
  }
  function deleteNote(id) {
    setNotes((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={handleClick} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            title={noteItem.title}
            content={noteItem.content}
            key={index}
            del={deleteNote}
            id={index}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
