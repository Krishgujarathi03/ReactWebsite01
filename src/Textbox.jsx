import React from "react";
import { useState } from "react";

const Textbox = (props) => {
  const [dis, setDis] = useState("none");
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function Clicked() {
    setDis("block");
  }
  function btnClicked(event) {
    event.preventDefault(); //  to prevent button from submiting
    setDis("none");
    // to empty note content for next notes
    props.actualNote(note);
    setNote({
      title: "",
      content: "",
    });
  }
  function Change(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <>
      <div className="textbox">
        <input readOnly placeholder="Note" onClick={Clicked} />
      </div>
      <div
        className="text_content"
        style={{
          display: dis,
        }}
      >
        <form>
          <input
            type="text"
            name="title"
            value={note.title}
            placeholder="Title"
            onChange={Change}
            autoComplete="off"
          />
          <textarea
            placeholder="Write a note"
            className="scroll"
            onChange={Change}
            name="content"
            autoComplete="off"
            value={note.content}
          />
          {/* <img
            alt=""
            width={"250px"}
            style={{ display: imgContent }}
            src={window.URL.createObjectURL(
              new File([selectedImg], { type: "image/jpeg" })
            )}
          /> */}

          <button className="btn" onClick={btnClicked}>
            Close
          </button>
        </form>
      </div>
    </>
  );
};
export default Textbox;
