// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FlyIoApps title', () => {
    render(<App />);
    const titleElement = screen.getByText(/FlyIoApps/i);
    expect(titleElement).toBeInTheDocument();
});
