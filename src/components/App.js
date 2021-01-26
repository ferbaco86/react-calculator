/* eslint-disable react/no-unused-state */
import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const AppContainer = styled.div`
display:flex
flex-direction:column;
width: 700px;`;

const App = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  // eslint-disable-next-line no-unused-vars
  const { total, next, operation } = state;

  const handleClick = buttonName => {
    setState(calculate(state, buttonName));
  };

  return (
    <>
      <AppContainer>
        <Display result={next || total || '0'} />
        <ButtonPanel clickHandler={handleClick} />
      </AppContainer>
    </>
  );
};

export default App;
