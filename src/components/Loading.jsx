// filepath: /c:/Users/kelenton/Desktop/Shelter/shelter/src/components/Loading.jsx
import React from 'react';
import logo from '../assets/img/logo.png';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="loader"><img src={logo} alt="" /></div>
    </div>
  );
};

export default Loading;