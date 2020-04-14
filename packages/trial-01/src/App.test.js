import React from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import App from './App';

test('renders learn react link', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  const image = div.querySelector('img');

  expect(image.src).toMatch(logo);
  expect(image).toHaveAttribute('alt')

  const link = div.querySelector('a');
  expect(link.href).toBe('https://reactjs.org/');

  expect(link).toHaveAttribute('rel')
  expect(link).toHaveAttribute('target')
  expect(link.textContent).toBe('Learn React')
});
