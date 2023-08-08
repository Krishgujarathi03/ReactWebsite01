import React from "react";
const Note = (props) => {
  function DeleteNote() {
    props.deleteItem(props.id);
  }

  if (props.title === "" && props.content === "") {
    return <></>;
  } else {
    return (
      <>
        <div className="note">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button onClick={DeleteNote}>
            <i class="bx bx-trash-alt"></i>
          </button>
        </div>
      </>
    );
  }
};
export default Note;
