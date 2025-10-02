// 'use client'
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';

// export default function Header() {
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Set state to true if user scrolls down more than 10px
//       setIsScrolled(window.scrollY > 10);
//     };

//     // Add scroll event listener when the component mounts
//     window.addEventListener('scroll', handleScroll);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []); // The empty array ensures this effect runs only once

//   const whiteTextPages = ['/', '/contact-us'];
//   const isWhiteTextPage = whiteTextPages.includes(pathname);

//   // Determine header classes based on scroll state
//   const headerClasses = isScrolled
//     ? 'bg-white shadow-md'
//     : 'bg-transparent';

//   // Determine text color based on scroll state and current page
//   const textColor = (isScrolled || !isWhiteTextPage)
//     ? 'text-gray-600 hover:text-gray-800'
//     : 'text-white hover:text-gray-200';

//   const separatorColor = (isScrolled || !isWhiteTextPage)? 'bg-gray-600' : 'bg-white';

//   return (
//     <header className={`fixed top-0 left-0 right-0 w-full px-6 py-4 z-50 transition-all duration-300 ${headerClasses}`}>
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center space-x-3">
//           <Image
//             src="/ghs-logo.png" // Update this path to your actual logo
//             alt="Global Health Strategies Logo"
//             width={300}
//             height={300}
//             className="rounded-full"
//           />
//         </div>

//         {/* Navigation */}
//         <nav className="flex items-center space-x-8">
//           <Link 
//             href="/" 
//             className={`font-medium transition-colors duration-200 ${textColor}`}
//           >
//             HOME
//           </Link>
//           <Link 
//             href="/where-we-are" 
//             className={`font-medium transition-colors duration-200 ${textColor}`}
//           >
//             WHERE WE ARE
//           </Link>
//           <Link 
//             href="/resources" 
//             className={`font-medium transition-colors duration-200 ${textColor}`}
//           >
//             RESOURCES
//           </Link>
          
//           {/* Separator line */}
//           <div className={`h-10 w-0.5 ${separatorColor}`}></div>
          
//           <Link 
//             href="/contact-us" 
//             className="bg-[#AD3F05] hover:bg-[#AD3105] text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
//           >
//             CONTACT
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Close mobile menu on resize to desktop view
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const whiteTextPages = ['/', '/contact-us'];
  const isWhiteTextPage = whiteTextPages.includes(pathname);

  const headerClasses = isScrolled || isMenuOpen // Keep header white if mobile menu is open
    ? 'bg-white shadow-md'
    : 'bg-transparent';

  const textColor = (isScrolled || isMenuOpen || !isWhiteTextPage)
    ? 'text-gray-600 hover:text-gray-800'
    : 'text-white hover:text-gray-200';

  const separatorColor = (isScrolled || isMenuOpen || !isWhiteTextPage) ? 'bg-gray-600' : 'bg-white';
  
  // Icon color should also adapt
  const iconColor = (isScrolled || isMenuOpen || !isWhiteTextPage) ? '#4B5563' : '#FFFFFF';

  return (
    <header className={`fixed top-0 left-0 right-0 w-full px-6 py-4 z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
            <Image
              src="/ghs-logo.png"
              alt="Global Health Strategies Logo"
              width={300} // Using a more appropriate base size
              height={60}
              className="h-10 w-auto md:h-12 lg:h-15" // Responsive logo size
              priority
            />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className={`font-medium  transition-colors duration-200 ${textColor}`}>
            HOME
          </Link>
          <Link href="/where-we-are" className={`font-medium transition-colors duration-200 ${textColor}`}>
            WHERE WE ARE
          </Link>
          <Link href="/resources" className={`font-medium transition-colors duration-200 ${textColor}`}>
            RESOURCES
          </Link>
          <div className={`h-10 w-0.5 ${separatorColor}`}></div>
          <Link href="/contact-us" className="bg-[#AD3F05] hover:bg-[#AD3105] text-white px-6 py-2 rounded-full font-medium transition-colors duration-200">
            CONTACT
          </Link>
        </nav>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? (
              // Close Icon (X)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={iconColor} strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={'#4B5563'} strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-16 6h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col items-center space-y-4 bg-white p-4 rounded-md shadow-lg">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="font-medium text-gray-600 hover:text-gray-800">
              HOME
            </Link>
            <Link href="/where-we-are" onClick={() => setIsMenuOpen(false)} className="font-medium text-gray-600 hover:text-gray-800">
              WHERE WE ARE
            </Link>
            <Link href="/resources" onClick={() => setIsMenuOpen(false)} className="font-medium text-gray-600 hover:text-gray-800">
              RESOURCES
            </Link>
            <Link href="/contact-us" onClick={() => setIsMenuOpen(false)} className="bg-[#AD3F05] hover:bg-[#AD3105] text-white px-6 py-2 rounded-full font-medium w-full text-center">
              CONTACT
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}