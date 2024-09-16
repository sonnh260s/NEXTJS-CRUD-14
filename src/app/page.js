"use client"
import Link from 'next/link';
import React from 'react';


const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="">
        <Link href='/employee/employeelist'>
          <button
            className='border border-gray-400 rounded-lg font-medium px-3 py-1.5 mx-2'>
            Management Employee
          </button>
        </Link>

        <Link href='/employee/dashboard'>
          <button
            className='border border-gray-400 rounded-lg font-medium px-3 py-1.5 mx-2'>
            Dashboard
          </button>
        </Link>
        
      </div>
    </div>
  );
}

export default Home;
