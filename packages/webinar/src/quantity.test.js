import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Quantity from './quantity';

test('render quantity input', () => {
  const myOnChange = jest.fn();

  const { debug, getByLabelText, queryByRole } = render(<Quantity onChange={myOnChange} />);

  const input = getByLabelText(/qtd items/i);
  expect(input).toHaveValue(0);

  expect(queryByRole('alert')).not.toBeInTheDocument();

  userEvent.type(input, '12');
  expect(input).toHaveValue(12);
  expect(queryByRole('alert')).toBeInTheDocument();

  expect(myOnChange).toHaveBeenCalled();
  expect(myOnChange).toHaveBeenCalledWith(12);
});