import { render, screen } from '@testing-library/react';
import { Home } from './pages';

// test(name, fn, timeout)
test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText('Home Insurance');
  expect(linkElement).toBeInTheDocument();
});