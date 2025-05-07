import { useState } from "react";

export function useKeeperFunctions() {
  const [notes, setNotes] = useState([]);
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

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return { handleChange, newNote, addNewNote, notes, deleteNote };
}
