import React from 'react';
import Navbar from '../../components/Navbar' // Import
import Footer from '../../components/Footer' // Import
// import './pageNotFound.css';

const PageNotFound: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="pageNotFoundContainer">
        <p>404 Error. Page not found</p>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
