import React from 'react';
import user from '@testing-library/user-event';
import { render } from '@testing-library/react';

import Quantity from '..';

test('render quantity component', () => {
  const mockedOnChange = jest.fn();

  const {
    getByLabelText,
    getByRole,
    rerender
  } = render(<Quantity onChange={mockedOnChange} />);

  expect(mockedOnChange).not.toHaveBeenCalled();

  const input = getByLabelText(/qtd items/i);
  expect(input).toHaveAttribute('type', 'number');

  user.type(input, '12')

  const alert = getByRole('alert');
  expect(alert).toHaveTextContent(/invalid quantity/i);

  expect(mockedOnChange).toHaveBeenCalledWith(12);

  rerender(<Quantity max={13} />);
  expect(alert).not.toBeInTheDocument();
});
