import React , {useEffect, useState} from 'react';
import Botao from './components/botao';
import Numero from './components/numero';

function App() {
  const [contador, setcontador] = useState(0);

  function somar() {
    setcontador(contador + 1)
  }

  function diminuir() {
    setcontador(contador - 1)
  }

  useEffect(()=> {
    if(contador) {
      if(contador % 2 == 0) alert("par");
    }
  },[contador])

  return (
    <div>
      <Numero>
        <p style={{color: "red"}}>{contador}</p>
      </Numero>
      <Botao onClick={somar} texto="Somar" />
      <Botao onClick={diminuir} texto="Diminuir" />
    </div>
  );
}

export default App;
