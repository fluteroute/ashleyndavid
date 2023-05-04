import React from 'react';
import { render, screen } from '../../../utils/setupTests';
import { theme } from '../../../utils/theme';
import { Typography } from './Typography';

test.each(Object.keys(theme.text))(
  '[components:base] Typography: should render with %s variant',
  (variant) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render(<Typography variant={variant}>Typography</Typography>);

    expect(screen.getByText('Typography')).toBeDefined();
  }
);
