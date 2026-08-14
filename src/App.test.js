// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SparkBase title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SparkBase/i);
    expect(titleElement).toBeInTheDocument();
});
