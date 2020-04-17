import React from 'react';
import ReactDOM from 'react-dom';
import App from '..';

test('renders learn react link with logo', () => {
  const div  = document.createElement('div');

  ReactDOM.render(<App />, div);
  // console.log(div.innerHTML);

  const image = div.querySelector('img');
  expect(image).toBeTruthy();
  expect(image.src).toBeTruthy();
  expect(image.alt).toBe('logo')

  const link = div.querySelector('a');
  expect(link).toBeTruthy();
  expect(link.href).toBeTruthy();
  expect(link.textContent).toBe('Learn React');
});
