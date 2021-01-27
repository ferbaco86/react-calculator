import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import NavBar from './NavBar';
import calculate from '../logic/calculate';

const CalculatorContainer = styled.div`
display:flex
flex-direction:column;
width: 700px;
border: 4px solid white`;

const ContentContainer = styled.section`
display: flex;
justify-content: space-between;
padding: 4.5rem`;

const CalculatorTitle = styled.h1`
font-size: 3rem;
color: white;
`;

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  // eslint-disable-next-line no-unused-vars
  const { total, next, operation } = state;

  const handleClick = buttonName => {
    setState(calculate(state, buttonName));
  };

  return (
    <>
      <NavBar />
      <ContentContainer>
        <CalculatorTitle>Let&#39;s do some math!</CalculatorTitle>
        <CalculatorContainer>
          <Display result={next || total || '0'} />
          <ButtonPanel clickHandler={handleClick} />
        </CalculatorContainer>
      </ContentContainer>
    </>
  );
};

export default Calculator;
