/* eslint-disable react/no-unused-state */
import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  // eslint-disable-next-line no-unused-vars
  const { total, next, operation } = state;

  const handleClick = buttonName => {
    setState(calculate(state, buttonName));
  };

  return (
    <>
      <Display result={next || total || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
