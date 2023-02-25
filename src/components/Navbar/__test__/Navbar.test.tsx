import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import Navbar from '../../Navbar';

describe('Header', () => {
  it('should render when component is mounted', () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
  it('should have its child components rendered perfectly',()=>{
    const {getByText} = render(<Navbar />);
    const childComponent = getByText('About')
    expect(childComponent).toBeTruthy();
  });

  it('should have option tag rendered',()=>{
    const {getByTestId} = render(<Navbar />);
    const childComponent = getByTestId('custom-element');
    expect(childComponent).toBeTruthy();
  });

});
