// import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/footer";
import Note from "./components/note";
import CreateArea from "./components/CreateArea";

function App() {
  return (
    <>
      <Header />
      <CreateArea />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </>
  );
}

export default App;
