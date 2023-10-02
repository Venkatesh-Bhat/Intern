import React from "react";

export default function Button(props) {
  return (
    <input type="button" value={props.label} onClick={props.handleClick} />
  );
}
