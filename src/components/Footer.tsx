// 'use client'
// import Image from 'next/image';
// import Link from 'next/link';

// export default function Footer() {
//   return (
//     <footer className="bg-[#D4763D] text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="flex flex-row items-start justify-around gap-10">
          
//           {/* Logo Section */}
//           <div className="flex-shrink-0">
//             <Image
//               src="/ghs-logo.png"
//               alt="Global Health Strategies Logo"
//               width={350}
//               height={50}
//             />
//           </div>

//           {/* Navigation & Connect Links Group */}
//           <div className="flex flex-row gap-20">
//             {/* Navigation Links */}
//             <div className="flex flex-col space-y-6">
//               <Link href="/" className="hover:text-orange-200 transition-colors text-xl">
//                 HOME
//               </Link>
//               <Link href="/where-we-are" className="hover:text-orange-200 transition-colors text-xl">
//                 WHERE WE ARE
//               </Link>
//               <Link href="/contact" className="hover:text-orange-200 transition-colors text-xl">
//                 CONTACT
//               </Link>
//             </div>

//             {/* Connect and Social Media */}
//             <div className="flex flex-col space-y-4">
//               <span className="text-xl font-medium">
//                 CONNECT
//               </span>
//               <div className="flex space-x-3">
//                 {/* Social Media Icons */}
//                 <Link 
//                   href="#" 
//                   aria-label="Facebook" 
//                   className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
//                 >
//                   <Image
//                     src="/icons/facebook.svg"
//                     alt="Facebook"
//                     width={48}
//                     height={48}
//                     className="text-[#D4763D]"
//                   />
//                 </Link>
//                 <Link 
//                   href="#" 
//                   aria-label="Twitter" 
//                   className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
//                 >
//                   <Image
//                     src="/icons/twitter.svg"
//                     alt="Twitter"
//                     width={48}
//                     height={48}
//                     className="text-[#D4763D]"
//                   />
//                 </Link>
//                 <Link 
//                   href="#" 
//                   aria-label="Instagram" 
//                   className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
//                 >
//                   <Image
//                     src="/icons/instagram.svg"
//                     alt="Instagram"
//                     width={48}
//                     height={48}
//                     className="text-[#D4763D]"
//                   />
//                 </Link>
//                 <Link 
//                   href="#" 
//                   aria-label="YouTube" 
//                   className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
//                 >
//                   <Image
//                     src="/icons/youtube.svg"
//                     alt="YouTube"
//                     width={48}
//                     height={48}
//                     className="text-[#D4763D]"
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Divider and Copyright */}
//         <div className="mt-12 pt-8 border-t border-white/40">
//           <p className="text-center text-white/80 text-lg">
//             All Content ©2025 Global Health Strategies. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#D4763D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main content container: flex-col on mobile, flex-row on medium screens and up */}
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left justify-around gap-10 md:gap-8">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/">
                <Image
                  src="/ghs-logo.png"
                  alt="Global Health Strategies Logo"
                  width={350}
                  height={50}
                  // Responsive width for the logo
                  className="w-[280px] md:w-[350px] h-auto"
                />
            </Link>
          </div>

          {/* Navigation & Connect Links Group: Stacks on mobile, row on desktop */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
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
              {/* Social icons: Centered on mobile, start-aligned on desktop */}
              <div className="flex space-x-3 justify-center md:justify-start">
                {/* Social Media Icons with ORIGINAL sizes */}
                <Link 
                  href="#" 
                  aria-label="Facebook" 
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Image
                    src="/icons/facebook.svg"
                    alt="Facebook"
                    width={48}
                    height={48}
                    className="text-[#D4763D]"
                  />
                </Link>
                <Link 
                  href="#" 
                  aria-label="Twitter" 
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Image
                    src="/icons/twitter.svg"
                    alt="Twitter"
                    width={48}
                    height={48}
                    className="text-[#D4763D]"
                  />
                </Link>
                <Link 
                  href="#" 
                  aria-label="Instagram" 
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Image
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    width={48}
                    height={48}
                    className="text-[#D4763D]"
                  />
                </Link>
                <Link 
                  href="#" 
                  aria-label="YouTube" 
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Image
                    src="/icons/youtube.svg"
                    alt="YouTube"
                    width={48}
                    height={48}
                    className="text-[#D4763D]"
                  />
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