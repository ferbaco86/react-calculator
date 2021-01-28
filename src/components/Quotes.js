import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import data from '../quotes.json';

const QuoteTitle = styled.h1`
font-size: 2.6rem;
text-align: center;
padding: 4.5rem;
margin-top: 10rem;
color: white;`;

const Quotes = () => {
  const randomNumber = Math.round(Math.random() * 20);
  const [quote, setQuote] = useState('Here comes the Math Quotes');
  useEffect(() => {
    setQuote(data[randomNumber]);
  }, []);
  return (
    <>
      <NavBar />
      <QuoteTitle data-testid="quote">{quote}</QuoteTitle>
    </>
  );
};

export default Quotes;
