import { render, screen } from '@testing-library/react';
import App from './App';

test('renders image', () => {
  render(<App />);
  const logo = screen.getByRole('img');
  expect(logo).toHaveAttribute('src', './images/didapatria.png');
  expect(logo).toHaveAttribute('alt', 'logo');
});

test('renders title', () => {
  render(<App />);
  const title = screen.getByText(/Tailwind CSS with Create React App/i);
  expect(title).toBeInTheDocument();
});
