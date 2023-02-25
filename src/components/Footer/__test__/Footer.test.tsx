import React from 'react';
import { render,screen } from '@testing-library/react';
import Footer from '..';

describe('Footer', () => {
  it('should render when component is mounted', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  // check if footer text is rendered in footer container
  it('should have footer text in it',()=>{
    const { container } = render(<Footer />);
    const linkElement = screen.getByText('footer');
    expect(linkElement).toBeInTheDocument();
  })
});
