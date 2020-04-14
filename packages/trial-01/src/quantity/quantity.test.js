import React from 'react';
import user from '@testing-library/user-event';
import { render } from '@testing-library/react';

import Quantity from './index';

test('should render the quantity component', () => {
  const mockedOnChangeHandler = jest.fn();

  const { debug, getByLabelText, queryByRole, rerender } = render(<Quantity onChange={mockedOnChangeHandler}/>);

  const input = getByLabelText('Qtd Items');

  expect(input).toHaveValue(0);
  expect(input).toHaveAttribute('type', 'number');

  const newValue = '12';
  user.type(input, newValue);

  expect(mockedOnChangeHandler).toHaveBeenCalledTimes(newValue.length);
  expect(mockedOnChangeHandler).toHaveBeenCalledWith(Number(newValue));

  const alert = queryByRole('alert');
  expect(alert).toBeInTheDocument();

  rerender(<Quantity max={14} />)

  expect(alert).not.toBeInTheDocument();

});