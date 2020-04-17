import React from 'react';
import ReactDOM from 'react-dom';
import App from '..';

test('renders learn react link with logo', () => {
  const div  = document.createElement('div');

  ReactDOM.render(<App />, div);

  const image = div.querySelector('img');
  expect(image).toBeTruthy();
  expect(image).toHaveAttribute('src');
  expect(image).toHaveAttribute('alt', 'logo')

  const link = div.querySelector('a');
  expect(link).toBeTruthy();
  expect(link).toHaveAttribute('href');
  expect(link).toHaveTextContent('Learn React');
});
