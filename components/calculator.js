import React from "react";

import styles from "../styles/calculator.module.css";

import Button from "../utils/buttons";
import Display from "../utils/display";

const Calculator = () => {
  return (
    <div className="flex-items-center">
      <div id={styles.calcBody}>
        <Display>
          <div></div>
          <div></div>
        </Display>
        <Button> AC </Button>
        <Button> DEL </Button>
        <Button> / </Button>
        <Button> 1 </Button>
        <Button> 2 </Button>
        <Button> 3 </Button>
        <Button> x </Button>
        <Button> 4 </Button>
        <Button> 5 </Button>
        <Button> 6 </Button>
        <Button> + </Button>
        <Button> 7 </Button>
        <Button> 8 </Button>
        <Button> 9 </Button>
        <Button> - </Button>
        <Button> . </Button>
        <Button> 0 </Button>
        <Button> = </Button>
      </div>
    </div>
  );
};

export default Calculator;
