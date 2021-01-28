import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import Calculator from '../../components/Calculator';

it('renders correctly', () => {
  const tree = renderer.create(<BrowserRouter><Calculator /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Calculator Components', () => {
  test('Have a Title', () => {
    render(<BrowserRouter><Calculator /></BrowserRouter>);

    expect(screen.getAllByRole('heading')[1]).toHaveTextContent("Let's do some math!");
  });

  test('Show a number on the Display', () => {
    render(<BrowserRouter><Calculator /></BrowserRouter>);
    fireEvent.click(screen.getByText('9'));
    expect(screen.getAllByRole('heading')[2]).toHaveTextContent('9');
  });

  test('Using + display an addition', () => {
    render(<BrowserRouter><Calculator /></BrowserRouter>);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getAllByRole('heading')[2]).toHaveTextContent('7');
  });
  test('Using - display a substraction', () => {
    render(<BrowserRouter><Calculator /></BrowserRouter>);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getAllByRole('heading')[2]).toHaveTextContent('-1');
  });
  test('Using x display a multiplication', () => {
    render(<BrowserRouter><Calculator /></BrowserRouter>);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getAllByRole('heading')[2]).toHaveTextContent('12');
  });
  test('Using ÷ display a division', () => {
    render(<BrowserRouter><Calculator /></BrowserRouter>);
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('÷'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getAllByRole('heading')[2]).toHaveTextContent('2');
  });
  test('Using % display a percentage', () => {
    render(<BrowserRouter><Calculator /></BrowserRouter>);
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('%'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getAllByRole('heading')[2]).toHaveTextContent('0.04');
  });
  test('Using AC returns to 0', () => {
    render(<BrowserRouter><Calculator /></BrowserRouter>);
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('AC'));
    expect(screen.getAllByRole('heading')[2]).toHaveTextContent('0');
  });
});
