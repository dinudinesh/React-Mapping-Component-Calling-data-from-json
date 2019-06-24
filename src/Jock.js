import React from "react";

function Jock(props) {
  return (
    <div>
      <h5>
        <b>Question:</b> {props.question}
      </h5>
      <h5>
        <b>Answer:</b> {props.answer}
      </h5>
      <hr />
    </div>
  );
}

export default Jock;
