import React, { useState } from "react";
import * as math from "mathjs"

import styles from "../styles/calculator.module.css";

import Button from "../utils/buttons";
import Display from "../utils/display";

const Calculator = () => {

    const [ state, setState ] = useState({
        currentOperand: '',
        prevOperand: '',
        operator: undefined
    });

    const ClearDisplay = () => {
        setState({
          currentOperand: "",
          prevOperand: "",
          operator: undefined,
        });
    }

    const AppendValue = (e) => {

      const value = e?.target.getAttribute("value");

      if (value === '.' && state.currentOperand.includes('.')) return
      setState((prev) => ({
        ...prev,
        currentOperand: prev.currentOperand.toString() + value,
      }));
    };

    const SelectOperation = (e) => {

      const value = e?.target.getAttribute("value");
      if (state.currentOperand === "") return

      if (state.prevOperand !== "") {
        EvaluateResults()
      }

      setState((prev) => ({
        currentOperand: "",
        prevOperand: prev.currentOperand.toString() + value.toString(),
        operation: value,
      }));

    };

    const EvaluateResults = () => {

      let result
      let prev = parseFloat(state.prevOperand)
      let current = parseFloat(state.currentOperand)

      if (isNaN(prev) || isNaN(current)) return

      switch (state.operation) {
          case "+":
            result = prev + current
            break;
          case "-":
            result = prev - current;
            break;
          case "*":
            result = prev * current;
            break;
          case "/":
            result = prev / current;
            break;
          default:
            break;

      }

      setState({
        prevOperand: "",
        currentOperand: result.toString(),
        operation: undefined,
      });
    };

    const DeleteValue = () => {
        setState((prev) => ({
          ...prev,
          currentOperand: prev.currentOperand.toString().slice(0, -1),
        }));
    }

  return (
    <div className="flex-items-center">
      <div id={styles.calcBody}>
        <Display>
          <div id={styles.prevOperand}> {state.prevOperand} </div>
          <div id={styles.currentOperand}>{state.currentOperand} </div>
        </Display>
        <Button className={styles.largeBtn} onClick={ClearDisplay}>
          {" "}
          AC{" "}
        </Button>
        <Button name="Del" value="del" onClick={DeleteValue}>
          {" "}
          DEL{" "}
        </Button>
        <Button name="/" value="/" onClick={SelectOperation}>
          {" "}
          /{" "}
        </Button>
        <Button name="1" value="1" onClick={AppendValue}>
          {" "}
          1{" "}
        </Button>
        <Button name="2" value="2" onClick={AppendValue}>
          {" "}
          2{" "}
        </Button>
        <Button name="3" value="3" onClick={AppendValue}>
          {" "}
          3{" "}
        </Button>
        <Button name="x" value="*" onClick={SelectOperation}>
          {" "}
          x{" "}
        </Button>
        <Button name="4" value="4" onClick={AppendValue}>
          {" "}
          4{" "}
        </Button>
        <Button name="5" value="5" onClick={AppendValue}>
          {" "}
          5{" "}
        </Button>
        <Button name="6" value="6" onClick={AppendValue}>
          {" "}
          6{" "}
        </Button>
        <Button name="+" value="+" onClick={SelectOperation}>
          {" "}
          +{" "}
        </Button>
        <Button name="7" value="7" onClick={AppendValue}>
          {" "}
          7{" "}
        </Button>
        <Button name="8" value="8" onClick={AppendValue}>
          {" "}
          8{" "}
        </Button>
        <Button name="9" value="9" onClick={AppendValue}>
          {" "}
          9{" "}
        </Button>
        <Button name="-" value="-" onClick={SelectOperation}>
          {" "}
          -{" "}
        </Button>
        <Button name="." value="." onClick={AppendValue}>
          {" "}
          .{" "}
        </Button>
        <Button name="0" value="0" onClick={AppendValue}>
          {" "}
          0{" "}
        </Button>
        <Button name="equals" onClick={EvaluateResults} className={styles.largeBtn}>
          {" "}
          ={" "}
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
