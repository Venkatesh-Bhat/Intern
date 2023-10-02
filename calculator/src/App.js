import "./App.css";
import Calculator from "./components/calculator";

function Input() {
  return (
    <div className="input">
      <input type="text" readOnly />
    </div>
  );
}

function TypeSegment({ val }) {
  return <button>{val}</button>;
}

function CalcComponent() {
  const arr = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, "AC", "/"];
  const buttonComp = arr.map((val, i) => (
    <div key={i}>
      {i === 0 || i % 4 === 0 ? <br /> : <></>}
      {/* <TypeSegment val={val} /> */}
      <button>{val}</button>
    </div>
  ));
  return (
    <div>
      <Input />
      {buttonComp}
    </div>
  );
}

export default function App() {
  return <Calculator />;
}
