import React from 'react';
import { render } from '@testing-library/react';
import Footer from '..';

describe('Footer', () => {
  it('should render when component is mounted', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
