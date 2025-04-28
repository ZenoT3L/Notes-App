// import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/footer";
import Note from "./components/note";
import notes from "./components/notes";

function App() {
  return (
    <>
      <Header />
      {notes.map((noteInfo) => (
        <Note
          key={noteInfo.key}
          title={noteInfo.title}
          text={noteInfo.content}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
