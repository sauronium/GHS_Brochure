import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-transparent px-6 py-4">
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
          {/* <span className="text-gray-700 font-semibold text-lg">
            Global Health Strategies
          </span> */}
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
          >
            HOME
          </Link>
          <Link 
            href="/where-we-are" 
            className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
          >
            WHERE WE ARE
          </Link>
          <Link 
            href="/resources" 
            className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
          >
            RESOURCES
          </Link>
          
          {/* Separator line */}
          <div className="h-6 w-px bg-gray-400"></div>
          
          <Link 
            href="/contact-us" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}