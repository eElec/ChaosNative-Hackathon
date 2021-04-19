import { render, screen } from '@testing-library/react';
import App from './App';

test('Check Roll', () => {
  render(<App />);
  const linkElement = screen.getByText(/1806188/i);
  expect(linkElement).toBeInTheDocument();
});
