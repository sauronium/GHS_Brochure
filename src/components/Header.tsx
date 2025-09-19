'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set state to true if user scrolls down more than 10px
      setIsScrolled(window.scrollY > 10);
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty array ensures this effect runs only once

  const whiteTextPages = ['/', '/contact-us'];
  const isWhiteTextPage = whiteTextPages.includes(pathname);

  // Determine header classes based on scroll state
  const headerClasses = isScrolled
    ? 'bg-white shadow-md'
    : 'bg-transparent';

  // Determine text color based on scroll state and current page
  const textColor = (isScrolled || !isWhiteTextPage)
    ? 'text-gray-600 hover:text-gray-800'
    : 'text-white hover:text-gray-200';

  const separatorColor = (isScrolled || !isWhiteTextPage)? 'bg-gray-600' : 'bg-white';

  return (
    <header className={`fixed top-0 left-0 right-0 w-full px-6 py-4 z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/ghslogo.png" // Update this path to your actual logo
            alt="Global Health Strategies Logo"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <Link 
            href="/" 
            className={`font-medium transition-colors duration-200 ${textColor}`}
          >
            HOME
          </Link>
          <Link 
            href="/where-we-are" 
            className={`font-medium transition-colors duration-200 ${textColor}`}
          >
            WHERE WE ARE
          </Link>
          <Link 
            href="/resources" 
            className={`font-medium transition-colors duration-200 ${textColor}`}
          >
            RESOURCES
          </Link>
          
          {/* Separator line */}
          <div className={`h-10 w-0.5 ${separatorColor}`}></div>
          
          <Link 
            href="/contact-us" 
            className="bg-[#AD3F05] hover:bg-[#AD3105] text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}