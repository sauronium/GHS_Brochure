'use client'
import Image from 'next/image';
import Link from 'next/link';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <footer className="bg-[#D4763D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-row items-start justify-around gap-10">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Image
              src="/ghslogo.png"
              alt="Global Health Strategies Logo"
              width={350}
              height={50}
              className=""
            />
          </div>

          {/* Navigation & Connect Links Group */}
          <div className="flex flex-row gap-20">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-6">
              <Link href="/" className="hover:text-orange-200 transition-colors text-xl">
                HOME
              </Link>
              <Link href="/where-we-are" className="hover:text-orange-200 transition-colors text-xl">
                WHERE WE ARE
              </Link>
              <Link href="/contact" className="hover:text-orange-200 transition-colors text-xl">
                CONTACT
              </Link>
            </div>

            {/* Connect and Social Media */}
            <div className="flex flex-col space-y-4">
              <span className="text-xl font-medium">
                CONNECT
              </span>
              <div className="flex space-x-4">
                {/* Social Media Icons using Material-UI */}
                <Link href="#" aria-label="Facebook" className="p-2 rounded-full hover:bg-white/20 transition-colors">
                  <FacebookRoundedIcon sx={{ fontSize: 28 }} />
                </Link>
                <Link href="#" aria-label="Twitter" className="p-2 rounded-full hover:bg-white/20 transition-colors">
                  <XIcon sx={{ fontSize: 28 }} />
                </Link>
                <Link href="#" aria-label="Instagram" className="p-2 rounded-full hover:bg-white/20 transition-colors">
                  <InstagramIcon sx={{ fontSize: 28 }} />
                </Link>
                <Link href="#" aria-label="Youtube" className="p-2 rounded-full hover:bg-white/20 transition-colors">
                  <YouTubeIcon sx={{ fontSize: 28 }} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="mt-12 pt-8 border-t border-white/40">
          <p className="text-center text-white/80 text-lg">
            All Content ©2025 Global Health Strategies. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}