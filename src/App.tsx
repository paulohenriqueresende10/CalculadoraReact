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
                onClick={() => {
                  console.log(`${btn} clicked!`);
                }}
              />
            );
          })
        }

     </Keypad>

    </Wrapper>
  );
}

export default App;
