import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-6">
      <div className="container mx-auto flex items-center justify-center font-poppins px-6">
        <p className="text-white">
          Powered By Yogesh Joshi &nbsp; | &nbsp; 
          <span className="mr-1">&#169;</span> {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
