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
      {/* 1. THE RECORD (Popping out from inside) */}
      {/* It sits "behind" the front faces of the crate */}
      <path
        d='M14 2L14 12L8 15V5L14 2Z'
        className='fill-[#F5DF2E] stroke-black stroke-2'
      />

      {/* 2. THE CRATE LEFT FACE */}
      <path
        d='M2 7L12 12V22L2 17V7Z'
        className='fill-white stroke-black stroke-[2.5px]'
      />

      {/* 3. THE CRATE RIGHT FACE */}
      <path
        d='M12 12L22 7V17L12 22V12Z'
        className='fill-white stroke-black stroke-[2.5px]'
      />

      {/* 4. THE CRATE TOP (Rim/Opening) */}
      <path
        d='M2 7L12 2L22 7L12 12L2 7Z'
        className='fill-none stroke-black stroke-[2.5px]'
      />

      {/* 5. CRATE DETAILS (Vertical Slats) */}
      {/* Left Face Slat */}
      <line
        x1='7'
        y1='9.5'
        x2='7'
        y2='19.5'
        className='stroke-black stroke-[2px]'
      />
      {/* Right Face Slat */}
      <line
        x1='17'
        y1='9.5'
        x2='17'
        y2='19.5'
        className='stroke-black stroke-[2px]'
      />
    </svg>
  );
};

export default DiggingLogo;
