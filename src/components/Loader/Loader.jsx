import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="lds-ellipsis">
        <div className='bg-secondary'>
        </div>
        <div className='bg-secondary'>
        </div>
        <div className='bg-secondary' >
        </div>
        <div className='bg-secondary'>
        </div>
      </div>
    </div>
  );
};

export default Loader;