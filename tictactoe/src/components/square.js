export default function Square(props) {
  const mod = {
    border: "1pt solid burlywood",
    color: "red",
  };
  if (props.value === "X") {
    mod.border = "2pt solid #f00";
    mod.color = "red";
  } else if (props.value === "O") {
    mod.border = "2pt solid #00F";
    mod.color = "blue";
  }
  return (
    <button style={mod} className="square" onClick={props.handleClick}>
      {props.value}
    </button>
  );
}
