import React , {useEffect, useState} from 'react';
import Botao from './components/botao';
import Keypad from './components/keypad';
import Screen from './components/screen';
import Wrapper from './components/wrapper';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  const [calculadora, setCalculadora] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const numClickHandler = (e: any) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (calculadora.num.toString().length < 16) {
      setCalculadora({
        ...calculadora,
        num:
          calculadora.num === 0 && value === "0"
            ? "0"
            : calculadora.num % 1 === 0
            ? Number(calculadora.num + value)
            : calculadora.num + value,
        res: !calculadora.sign ? 0 : calculadora.res,
      });
    }
  };

  const commaClickHandler = (e: any) => {
    e.preventDefault();
    const value = e.target.innerHTML;
  
    setCalculadora({
      ...calculadora,
      num: !calculadora.num.toString().includes(".") ? calculadora.num + value : calculadora.num,
    });
  };

  const signClickHandler = (e: any) => {
    e.preventDefault();
    const value = e.target.innerHTML;
  
    setCalculadora({
      ...calculadora,
      sign: value,
      res: !calculadora.res && calculadora.num ? calculadora.num : calculadora.res,
      num: 0,
    });
  };

  const equalsClickHandler = () => {
    if (calculadora.sign && calculadora.num) {
      const math = (a: number, b: number, sign: string) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;
  
      setCalculadora({
        ...calculadora,
        res:
          calculadora.num === 0 && calculadora.sign === "/"
            ? 0
            : math(Number(calculadora.res), Number(calculadora.num), calculadora.sign),
        sign: "",
        num: 0,
      });
    }
  };

  const invertClickHandler = () => {
    setCalculadora({
      ...calculadora,
      num: calculadora.num ? calculadora.num * -1 : 0,
      res: calculadora.res ? calculadora.res * -1 : 0,
      sign: "",
    });
  };

  const percentClickHandler = () => {
    let num = calculadora.num ? parseFloat(calculadora.num.toString()) : 0;
    let res = calculadora.res ? parseFloat(calculadora.res.toString()) : 0;
  
    setCalculadora({
      ...calculadora,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };

  const resetClickHandler = () => {
    setCalculadora({
      ...calculadora,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  return (
    <Wrapper>
     <Screen>
      {calculadora.num ? calculadora.num : calculadora.res}
     </Screen>
     <Keypad>
      {
        btnValues.flat().map((btn, i) => {
          return (
            <Botao
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={
                  btn === "C"
                    ? resetClickHandler
                    : btn === "+-"
                    ? invertClickHandler
                    : btn === "%"
                    ? percentClickHandler
                    : btn === "="
                    ? equalsClickHandler
                    : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                    ? signClickHandler
                    : btn === "."
                    ? commaClickHandler
                    : numClickHandler
                }
              />
            );
          })
        }

     </Keypad>

    </Wrapper>
  );
}

export default App;
