import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Quantity from '..';

test('render quantity component', () => {
  const { getByLabelText, getByRole } = render(<Quantity/>);

  const input = getByLabelText(/qtd items/i);
  expect(input).toHaveAttribute('type', 'number');

  fireEvent.change(input, { target: { value: 12 }});

  const alert = getByRole('alert');
  expect(alert).toHaveTextContent(/invalid quantity/i);
});
