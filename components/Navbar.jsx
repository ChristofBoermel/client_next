'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../public/images/logo-white.png';
import profileDefault from '../public/images/profile.png';
import { FaGoogle } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const pathname = usePathname();

  return (
    <nav className='bg-[#ebe0c7] border-b border-white'>
      <div className='mx-auto max-w-full px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-20 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
            {/* <!-- Mobile menu button--> */}
            <button
              type='button'
              id='mobile-dropdown-button'
              className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className='absolute -inset-0.5'></span>
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>

          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            {/* <!-- Logo --> */}
            <Link className='flex flex-shrink-0 items-center' href='/'>
              <Image className='h-10 w-auto' src={logo} alt='Tiny Libraries' />
            </Link>
            {/* <!-- Desktop Menu Hidden below md screens --> */}
            <div className='hidden md:ml-6 md:block'>
              <div className='flex space-x-2'>
                <Link
                  href='/'
                  className={`${
                    pathname === '/' ? 'bg-[#5e491b]' : ''
                  } text-white hover:bg-[#867754] hover:text-white rounded-md px-3 py-2`}
                >
                  Home
                </Link>
                {isLoggedIn && (
                  <Link
                    href='/libraries'
                    className={`${
                      pathname === '/libraries' ? 'bg-[#5e491b]' : ''
                    } text-white hover:bg-[#867754] hover:text-white rounded-md px-3 py-2`}
                  >
                    Libraries
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* <!-- Right Side Menu (Logged Out) --> */}

        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isMobileMenuOpen && (
        <div id='mobile-menu'>
          <div className='space-y-1 px-2 pb-3 pt-2'>
            <Link
              href='/'
              className={`${
                pathname === '/' ? 'bg-[#867754]' : ''
              } text-white block rounded-md px-3 py-2 text-base font-medium`}
            >
              Home
            </Link>
            <Link
              href='/books'
              className={`${
                pathname === '/books' ? 'bg-[#867754]' : ''
              } text-white block rounded-md px-3 py-2 text-base font-medium`}
            >
              Books
            </Link>
            {isLoggedIn && (
              <Link
                href='/libraries'
                className={`${
                  pathname === '/libraries' ? 'bg-[#867754]' : ''
                } text-white block rounded-md px-3 py-2 text-base font-medium`}
              >
                Libraries
              </Link>
            )}
            {!isLoggedIn && (
              <button className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4'>
                <i className='fa-brands fa-google mr-2'></i>
                <span>Login or Register</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
