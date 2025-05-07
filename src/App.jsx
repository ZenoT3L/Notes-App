import Header from "./components/Header";
import Footer from "./components/footer";
import Note from "./components/note";
import CreateArea from "./components/CreateArea";
import { useKeeperFunctions } from "./components/functions";

function App() {
  const { handleChange, newNote, addNewNote, notes, deleteNote } =
    useKeeperFunctions();

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
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          delete={deleteNote}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
