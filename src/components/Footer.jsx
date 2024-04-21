import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [creatorName, setCreatorName] = useState('Majek');

  useEffect(() => {
    // Fetch dynamic data asynchronously
    fetchCreatorName();
  }, []);

  const fetchCreatorName = async () => {
    try {
      // Example fetch function
      const response = await fetch('/api/creator');
      if (!response.ok) {
        throw new Error('Failed to fetch creator name');
      }
      const data = await response.json();
      setCreatorName(data.name);
    } catch (error) {
      console.error('Error fetching creator name:', error);
    }
  };

  return (
    <footer className='bg-pink-900'>
      <div className="w-full flex justify-center mx-auto max-w-screen-xl p-3 md:flex md:items-center md:justify-center">
        <span className="text-white text-sm sm:text-center">
          © {currentYear} <a href="" className="hover:underline"></a>Made with <span className='text-red-500'>♥</span> by{''}
          <a href="https://github.com"> {creatorName}</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
