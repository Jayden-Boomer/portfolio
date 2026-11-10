import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.matchMedia = jest.fn().mockReturnValue({ matches: true });
  window.IntersectionObserver = jest.fn().mockImplementation(() => ({ observe: jest.fn(), disconnect: jest.fn() }));
});

test('shows projects and resume without making GitHub API requests', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Hi, I'm Jayden Boomer/ })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /View repository for/ })).toHaveLength(4);
  expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute('href', '#resume');
  expect(screen.getByRole('link', { name: 'Download Resume (PDF)' })).toHaveAttribute('download', 'JaydenBoomerResume.pdf');
  expect(screen.getByRole('heading', { name: 'Education', exact: true })).toBeInTheDocument();
});

test('mobile navigation closes on selection and Escape', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Open navigation', exact: true }));
  expect(screen.getByRole('button', { name: 'Close navigation', exact: true })).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', { name: 'Projects', exact: true }));
  expect(screen.getByRole('button', { name: 'Open navigation', exact: true })).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(screen.getByRole('button', { name: 'Open navigation', exact: true }));
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(screen.getByRole('button', { name: 'Open navigation', exact: true })).toHaveAttribute('aria-expanded', 'false');
});
