import React from 'react';
import user from '@testing-library/user-event';

import { render } from '@testing-library/react';

import Quantity from './index';

test('render quantity input', () => {
  const mockedOnChange = jest.fn();

  const { getByLabelText, queryByRole, rerender } = render(<Quantity onChange={mockedOnChange} />);

  const input = getByLabelText('Qtd Items');
  expect(input).toHaveAttribute('type', 'number');
  expect(input).toHaveValue(0);

  user.type(input, '12');

  expect(mockedOnChange).toHaveBeenCalled();
  expect(mockedOnChange).toHaveBeenCalledWith(12);

  const alert = queryByRole('alert');
  expect(alert).toBeInTheDocument();

  rerender(<Quantity max={20} />);

  expect(alert).not.toBeInTheDocument();
})