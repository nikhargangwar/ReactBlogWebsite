import React from 'react';
import {  getByTestId, render,screen, waitFor } from '@testing-library/react';
import makeRequest from '../../../utils/makeRequest';
import { mockBlogPostData } from '../../../mocks/blogData';
import { useNavigate } from 'react-router-dom';

import MainBody from '..';
jest.mock('../../../utils/makeRequest');
jest.mock('react-router-dom',()=>({
  useNavigate:jest.fn()
}));
describe('MainBody', () => {

  it('should show loading text when data is still loading',async()=>{
    const mockMakeRequest = makeRequest as jest.MockedFunction<
    typeof makeRequest
  >;
  mockMakeRequest.mockResolvedValue(mockBlogPostData);
  render(<MainBody/>);
  expect(screen.getByText('Loading...')).toBeTruthy();
  await waitFor(()=>{
    expect(screen.getAllByText('mock title 1')).toBeTruthy();
  })
  });


  it('it should show blogpost when data is loaded',async()=>{
    const mockMakeRequest = makeRequest as jest.MockedFunction<
    typeof makeRequest
  >;
  mockMakeRequest.mockResolvedValue(mockBlogPostData);
  render(<MainBody/>);

  await waitFor(()=>{
    expect(screen.getAllByTestId('blog-post')).toHaveLength(2);
  })
  });

  it('should show error message when there is error in the fetch',async()=>{
    const mockMakeRequest = makeRequest as jest.MockedFunction<
    typeof makeRequest
  >;
  mockMakeRequest.mockRejectedValue({message:'Error!!!'});
  render(<MainBody/>);
  await waitFor(()=>{
    expect(screen.getByText('Error!!!')).toBeTruthy();
  })  
  })
  



  // it('should show loadig whenn data is still loadinng',()=>{
  //   render(<MainBody/>);
  //   expect(screen.getByText('Loading...')).toBeTruthy();
  // });

  // it('should show the blogPost when data is loaded',()=>{
  //   render(<MainBody/>);
  // })
});
