import { useState } from "react";
import Box from "./Box";
import bkspace from "./assets/backspace (2).png";
// import { toNumber } from "lodash";
// import { imgProperties } from "@fluentui/react";

function Calculator() {
  const [text, setText] = useState<any>(""); //1

  const [show, setShow] = useState<boolean>(true);
  const [result, setResult] = useState<number>(0);

  function addingno(index: any) {
    //1
    // {
    //   let temp = "" + input + index;
    //   let a = toNumber(temp); //1
    //   setInput(a); //1
    //   setNum1(a);
    //   console.log(num1);
    // }
    // if(index=="+")
    // {
    //   setInput(input+"+")
    // }
    setShow(true);
    let temp = text + index;
    setText(temp);
    // let a=eval(text);
    // setResult(a);
    // console.log(result);
  }
  function results() {
    setShow(false);
    setText("");
    let a = eval(text);
    setResult(a);
    setText(a);
    setShow(true);
  }
  console.log(result);

  function backspace() {
    setText(text.slice(0, -1));
  }

  function clear() {
    setText("");
  }
  return (
    <div className="parent">
      <div>
        <input
          className="textfield"
          type="text"
          value={show ? text : result}
          readOnly
        />
      </div>
      <div className="calculator">
        <Box onClick={() => clear()} value={"C"} />
        <Box onClick={() => backspace()} value={<img className="image" src={bkspace}></img>} />
        <Box onClick={() => addingno("/")} value={"/"} />
        <Box className="equalbutton" onClick={results} value={"="} />
      </div>
      <div className="calculator">
        <Box onClick={() => addingno(1)} value={1} />
        <Box onClick={() => addingno(2)} value={2} />
        <Box onClick={() => addingno(3)} value={3} />
        <Box onClick={() => addingno("+")} value={"+"} />
      </div>
      <div className="calculator">
        <Box onClick={() => addingno(4)} value={4} />
        <Box onClick={() => addingno(5)} value={5} />
        <Box onClick={() => addingno(6)} value={6} />
        <Box onClick={() => addingno("-")} value={"-"} />
      </div>
      <div className="calculator">
        <Box onClick={() => addingno(7)} value={7} />
        <Box onClick={() => addingno(8)} value={8} />
        <Box onClick={() => addingno(9)} value={9} />
        <Box onClick={() => addingno("*")} value={"*"} />
      </div>
      <div className="calculator">
        <Box className="equalbutton" onClick={results} value={"="} />
        <Box onClick={() => addingno(0)} value={0} />
        <Box onClick={() => addingno(".")} value={"."} />
        <Box onClick={() => addingno("%")} value={"%"} />
      </div>
    </div>
  );
}

export default Calculator;
