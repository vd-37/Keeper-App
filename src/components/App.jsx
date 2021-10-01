import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(post) {
    setNotes((prevValue) => {
      return [...prevValue, post];
    });
  }

  function deleteNote(index) {
    setNotes((prevValue) => {
      return prevValue.filter((note, id) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            title={noteItem.title}
            content={noteItem.content}
            id={index}
            onChecked={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
