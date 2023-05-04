import React from 'react';
import { Iframe } from './Iframe';
import { render } from '../../../utils/setupTests';

test('[components:base] Iframe: should render', () => {
  render(<Iframe />);
});
