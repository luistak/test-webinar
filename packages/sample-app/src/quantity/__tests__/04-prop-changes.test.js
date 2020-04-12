import React from 'react';
import user from '@testing-library/user-event';
import { render } from '@testing-library/react';

import Quantity from '..';

test('render quantity component', () => {
  const { getByLabelText, getByRole, rerender } = render(<Quantity/>);

  const input = getByLabelText(/qtd items/i);

  expect(input).toHaveAttribute('type', 'number');

  user.type(input, '12')

  const alert = getByRole('alert');
  expect(alert).toHaveTextContent(/invalid quantity/i);

  rerender(<Quantity max={13} />);
  expect(alert).not.toBeInTheDocument();
});
