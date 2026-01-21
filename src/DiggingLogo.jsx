import React from "react";

const DiggingLogo = ({ size = 40, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      {/* The "Found" Record (Popped Up) - Electric Yellow */}
      <rect
        x='13'
        y='2'
        width='6'
        height='10'
        className='fill-[#F5DF2E] stroke-black stroke-2'
      />

      {/* The Crate Front - Heavy Black Outline */}
      <path
        d='M2 10H22V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V10Z'
        className='fill-white stroke-black stroke-[3px]'
      />

      {/* The "Other" Records (Vertical Lines) */}
      <line x1='6' y1='13' x2='6' y2='19' className='stroke-black stroke-2' />
      <line x1='10' y1='13' x2='10' y2='19' className='stroke-black stroke-2' />

      {/* Diagonal Texture (Optional Detail for 'Street' Vibe) */}
      <line x1='18' y1='18' x2='20' y2='16' className='stroke-black stroke-2' />
    </svg>
  );
};

export default DiggingLogo;
