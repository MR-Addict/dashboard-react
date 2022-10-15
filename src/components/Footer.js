import React from "react";

const Footer = () => (
  <div className='mt-24'>
    <p className='dark:text-gray-200 text-gray-700 text-center m-20'>
      &copy;{` Copyright ${new Date().getFullYear()} MR-Addict`}
    </p>
  </div>
);

export default Footer;
