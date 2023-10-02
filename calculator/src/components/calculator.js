import React from "react";
import { useState } from "react";
import CalculatorTitle from "./calculatorTitle";
import OutputScreen from "./outputScreen";
import Button from "./button";

export default function Calculator() {
  const [dispQuestion, setDispQuestion] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  /*Function to handle button clicks*/
  function evaluateValue(value) {
    console.log(`Button pressed is: ${value}`);
    switch (value) {
      case "CE":
        setQuestion((question) => question.slice(0, -1));
        setDispQuestion((dispQuestion) => dispQuestion.slice(0, -1));
        break;
      case "AC":
        setAnswer("");
        setQuestion("");
        setDispQuestion("");
        break;
      case "=":
        try {
          setAnswer(eval(question));
        } catch (err) {
          alert("Math Error" + err);
        }
        break;
      case "log":
        setQuestion((question) => question + "Math.log10(");
        setDispQuestion((dispQuestion) => dispQuestion + "log10(");
        break;
      case "^":
        setQuestion((question) => question + "**");
        setDispQuestion((dispQuestion) => dispQuestion + "^");
        break;
      case "√":
        setQuestion((question) => question + "Math.sqrt(");
        setDispQuestion((dispQuestion) => dispQuestion + "√(");
        break;
      case "Ans":
        setQuestion((question) => question + answer);
        setDispQuestion((dispQuestion) =>
          answer === "" ? dispQuestion : dispQuestion + "Ans"
        );
        break;
      default:
        setQuestion((question) => question + value);
        setDispQuestion((dispQuestion) => dispQuestion + value);
    }
  }

  const btnValues = [
    ["log", "^", "√", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["(", "0", ")", "CE"],
    ["Ans", "=", ".", "AC"],
  ];
  return (
    <div className="frame">
      <CalculatorTitle title="Calculator" />
      <OutputScreen question={dispQuestion} answer={answer} />
      {btnValues.map((row, rowIndex) => (
        <div key={rowIndex} className="button-row">
          {row.map((label, btnIndex) => (
            <Button
              key={btnIndex}
              label={label}
              handleClick={() => evaluateValue(label)}
            />
          ))}
        </div>
      ))}
    </div>
  );
  /*return (
    <div className="frame">
      <CalculatorTitle title="Calculator" />
      <OutputScreen />
      <div className="button-row">
        <Button label={"Clear"} />
        <Button label={"Delete"} />
        <Button label={"."} />
        <Button label={"/"} />
      </div>
      <div className="button-row">
        <Button label={"7"} />
        <Button label={"8"} />
        <Button label={"9"} />
        <Button label={"*"} />
      </div>
      <div className="button-row">
        <Button label={"4"} />
        <Button label={"5"} />
        <Button label={"6"} />
        <Button label={"-"} />
      </div>
      <div className="button-row">
        <Button label={"1"} />
        <Button label={"2"} />
        <Button label={"3"} />
        <Button label={"+"} />
      </div>
      <div className="button-row">
        <Button label={"0"} />
        <Button label={"="} />
      </div>
    </div>
  ); */
}
