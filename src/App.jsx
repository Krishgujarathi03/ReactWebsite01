import React from "react";
import Navbar from "./Navbar";
import Textbox from "./Textbox";
import Note from "./Note";
import { useState } from "react";
import Footer from "./Footer";
const App = () => {
  const [add, setAdd] = useState([]);
  function addNote(note) {
    setAdd((prev) => {
      return [...prev, note];
    });
    // console.log(note);
  }

  function onDelete(id) {
    setAdd((prev) => {
      return prev.filter((curr, index) => {
        return id !== index;
        // Show all notes expect deleted note
      });
    });
  }

  return (
    <>
      <Navbar />
      <Textbox actualNote={addNote} />
      <div className="notes">
        {add.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};
export default App;
