/* eslint-disable react/no-unused-state */
import { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    // const calculation = calculate(this.state, buttonName);
    this.setState(state => calculate(state, buttonName));
  }

  render() {
    const { total, next } = this.state;
    return (
      <>
        <Display result={next || total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
