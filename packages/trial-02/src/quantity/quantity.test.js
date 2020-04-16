import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';

import Quantity from './index';

test('render quantity component', () => {
  const onChange = jest.fn();
  const { getByLabelText, queryByRole, rerender } = render(<Quantity onChange={onChange} />);

  const input = getByLabelText('Qtd Items');

  expect(input).toHaveValue(0);
  expect(input).toHaveAttribute('type', 'number');

  user.type(input, '12');

  expect(onChange).toHaveBeenCalled();
  expect(onChange).toHaveBeenCalledWith(12);

  const alert = queryByRole('alert');

  expect(alert).toBeInTheDocument();
  expect(alert).toHaveTextContent('Invalid quantity');

  rerender(<Quantity max={20} />);

  expect(alert).not.toBeInTheDocument();
});