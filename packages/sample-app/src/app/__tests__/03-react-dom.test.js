import React from 'react';
import ReactDOM from 'react-dom';
import App from '..';

test('renders learn react link with logo', () => {
  const div  = document.createElement('div');

  ReactDOM.render(<App />, div);

  // console.log(div.innerHTML);

  const image = div.querySelector('img');
  expect(image).not.toBeNull();
  expect(image.src).not.toBeNull();
  expect(image.alt).toBe('logo')

  const link = div.querySelector('a');

  expect(link).not.toBeNull();
  expect(link.href).not.toBeNull();
  expect(link.textContent).toBe('Learn React');
});
