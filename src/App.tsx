/* eslint-disable quotes */
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ERROR_ROUTE, HOME_ROUTE } from "./constants/routes";
import PageNotFound from './pages/PageNotFound';
import Error from './pages/Error';
import Home from './pages/Home'
import './App.css'
import {BlogPostProvider} from './context/BlogPostContext'
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={HOME_ROUTE} element={
            <BlogPostProvider> 
              <Home />
            </BlogPostProvider>
          } />
          <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Error />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
