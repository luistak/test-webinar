import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';

test('Logging in', () => {
  render(<LoginPage />);

  const userInput = screen.getByLabelText(/user/i);
  fireEvent.change(userInput, { target: { value: 'master' } });

  const passwordInput = screen.getByLabelText(/senha/i);
  fireEvent.change(passwordInput, { target: { value: '123123' } });

  const submitButton = screen.getByText(/entrar/i);
  fireEvent.click(submitButton);

  const successMessage = screen.getByText(/olá/i);
  expect(successMessage).not.toBeNull();
});
