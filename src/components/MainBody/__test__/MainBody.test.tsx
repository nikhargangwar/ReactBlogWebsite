import React from 'react';
import { render } from '@testing-library/react';

import MainBody from '..';

describe('MainBody', () => {
  // 1
  it('should render when component is mounted', () => {
    const { container } = render(<MainBody />);
    expect(container).toMatchSnapshot();
  });
});
