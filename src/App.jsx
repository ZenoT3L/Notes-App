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

  return (
    <>
      <Header />
      <CreateArea />
      {notes.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} />
      ))}
      <Footer />
    </>
  );
}

export default App;
