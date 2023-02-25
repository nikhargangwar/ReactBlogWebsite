import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar' // Import
import Footer from '../../components/Footer' // Import
// import './error.css';

const Error: React.FC = () => {
  const { errorCode } = useParams();
  return (
    <div>
      <Navbar />
      <div className="errorContainer">
        <p>Something went wrong!</p>
        {errorCode && <p>{`Error code: ${errorCode}`}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Error;
