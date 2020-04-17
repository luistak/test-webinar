import React from 'react';
import { render } from '@testing-library/react';

import Quantity from '..';

test('render quantity component', () => {
  const { getByLabelText } = render(<Quantity/>);

  const input = getByLabelText(/qtd items/i);
  expect(input).toHaveAttribute('type', 'number');
});