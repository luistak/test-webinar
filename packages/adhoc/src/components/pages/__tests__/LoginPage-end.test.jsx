import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../../reducers/reducer';
import LoginPage from '../LoginPage';
let wrapper;

beforeEach(() => {
  wrapper = ({ children }) => (
    <Provider store={createStore(reducer)}>{children}</Provider>
  );
});
test('Logging in', async () => {
  render(<LoginPage />, { wrapper });
  const userInput = screen.getByLabelText(/user/i);
  user.type(userInput, 'master');
  const passwordInput = screen.getByLabelText(/senha/i);
  user.type(passwordInput, '123123');
  const submitButton = screen.getByText(/entrar/i);
  user.click(submitButton);
  const successMessage = await screen.findByText(/olá/i);
  expect(successMessage).not.toBeNull();
});
