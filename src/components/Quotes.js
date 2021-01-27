import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const QuoteTitle = styled.h1`
font-size: 2.6rem;
text-align: center;
padding: 1.5rem;
margin-top: 10rem;
color: white;`;

const Quotes = () => {
  const randomNumber = Math.round(Math.random() * 20);
  const [quote, setQuote] = useState('');
  const getQuotes = () => {
    fetch('quotes.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then(response => response.json()).then(myJson => {
      setQuote(myJson);
    });
  };
  useEffect(() => {
    getQuotes();
  }, []);
  return (
    <>
      <NavBar />
      <QuoteTitle>{quote[randomNumber]}</QuoteTitle>
    </>
  );
};

export default Quotes;
