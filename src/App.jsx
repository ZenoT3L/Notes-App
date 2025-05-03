import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/footer";
import Note from "./components/note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "First Note",
      content: "How does it work?",
    },
    {
      title: "Second Note",
      content: "It worked?",
    },
  ]);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "title") {
      setNewNote((prevValue) => {
        return {
          ...prevValue,
          title: value,
        };
      });
    } else if (name === "content") {
      setNewNote((prevValue) => {
        return {
          ...prevValue,
          content: value,
        };
      });
    }
    console.log(newNote);
  }

  function addNewNote() {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    setNewNote({
      title: "",
      content: "",
    });
  }

  return (
    <>
      <Header />
      <CreateArea
        onchange={handleChange}
        newTitle={newNote.title}
        newContent={newNote.content}
        onSubmit={addNewNote}
      />
      {notes.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} />
      ))}
      <Footer />
    </>
  );
}

export default App;
