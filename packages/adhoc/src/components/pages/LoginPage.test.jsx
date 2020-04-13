import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../reducers/reducer';
import LoginPage from './LoginPage';

let wrapper;
beforeEach(() => {
  wrapper = ({ children }) => (
    <Provider store={createStore(reducer)}>{children}</Provider>
  );
});

test('Logging in', () => {
  render(<LoginPage />, { wrapper });

  const userInput = screen.getByLabelText(/user/i);
  fireEvent.change(userInput, { target: { value: 'master' } });

  const passwordInput = screen.getByLabelText(/senha/i);
  fireEvent.change(passwordInput, { target: { value: '123123' } });

  const submitButton = screen.getByText(/entrar/i);
  fireEvent.click(submitButton);

  const successMessage = screen.getByText(/olá/i);

  expect(successMessage).not.toBeNull();
});
