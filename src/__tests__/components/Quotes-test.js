import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import {
  render, screen,
} from '@testing-library/react';
import Quotes from '../../components/Quotes';

it('renders correctly', () => {
  const tree = renderer.create(<BrowserRouter><Quotes /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Quotes Components', () => {
  test('Have a quote', () => {
    render(<BrowserRouter><Quotes /></BrowserRouter>);
    const quote = screen.getByText(content => content.startsWith('Quote:'));
    expect(quote).toBeInTheDocument();
  });
});
