import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import {
  render, screen,
} from '@testing-library/react';
import App from '../../components/App';

it('renders correctly', () => {
  const tree = renderer.create(<BrowserRouter><App /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Home Components', () => {
  test('Have a Title welcoming to the page', () => {
    render(<BrowserRouter><App /></BrowserRouter>);

    expect(screen.getByTestId('welcome')).toHaveTextContent('WELCOME TO OUR SITE');
  });
});
