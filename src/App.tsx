import React , {useEffect, useState} from 'react';
import Keypad from './components/keypad';
import Screen from './components/screen';
import Wrapper from './components/wrapper';

function App() {
 
  return (
    <Wrapper>
     <Screen />
     <Keypad />
    </Wrapper>
  );
}

export default App;
