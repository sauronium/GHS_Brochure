// import Image from "next/image";
// import React from "react";
// import TuneIcon from "@mui/icons-material/Tune";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import SearchIcon from "@mui/icons-material/Search";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// // Type definitions
// interface ResourceData {
//   backgroundColor: string;
//   imageSrc: string;
//   title: string;
//   type: string;
//   viewLink: string;
// }

// interface ResourceCardProps {
//   backgroundColor: string;
//   imageSrc: string;
//   title: string;
//   type: string;
//   viewLink: string;
// }

// const ResourceCard: React.FC<ResourceCardProps> = ({
//   backgroundColor,
//   imageSrc,
//   title,
//   type,
//   viewLink,
// }) => {
//   return (
//     <div
//       className="flex shadow-lg overflow-hidden h-100"
//       style={{ backgroundColor }}
//     >
//       {/* Left side - image */}
//       <div className="flex items-center justify-center py-6 pl-12">
//         <div className="w-52 h-72 relative shadow-lg">
//           <Image src={imageSrc} alt={title} fill className="!w-52 !h-72" />
//         </div>
//       </div>

//       {/* Right side - content */}
//       <div className="flex-1 py-6 pl-6 pr-12 mt-12 flex flex-col justify-center">
//         <span className="text-sm text-white tracking-wide mb-3">{type}</span>
//         <h3 className="text-2xl font-semibold text-white mb-6 leading-tight">
//           {title}
//         </h3>
//         <div className="flex space-x-3 items-center">
//           <a href={viewLink} target={`${viewLink ? "_blank": ""}`} rel="noopener noreferrer">
//             <button className="px-8 py-1 text-sm border rounded-full border-white text-white hover:bg-white hover:text-gray-900 transition-colors">
//               View
//             </button>
//           </a>
//           <button className="px-6 py-1 border text-sm border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-colors">
//             Download
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Page: React.FC = () => {
//   const resourceData: ResourceData[] = [
//     {
//       backgroundColor: "#3B818F",
//       imageSrc: "/images/ppsabook.png",
//       title: "Patient Provider Support Agency (PPSA) report (2023)",
//       type: "Report",
//       viewLink:
//         "https://tbcindia.mohfw.gov.in/wp-content/uploads/2023/05/6897926685Creating-synergies-to-ensure-quality-TB-care_Compendium-of-PPSA-best-practices.pdf",
//     },
//     {
//       backgroundColor: "#A25C37",
//       imageSrc: "/images/ppsabook.png",
//       title: "Patient Support System (PSS) report (2018)",
//       type: "Report",
//       viewLink: "",
//     },
//     {
//       backgroundColor: "#D4763D",
//       imageSrc: "/images/whobook.png",
//       title:
//         "WHO's Best Practices in Multisectoral Accountability Framework (MAF-TB) document (2022)",
//       type: "Report",
//       viewLink: "https://www.who.int/publications/i/item/9789240066069",
//     },
//     {
//       backgroundColor: "#3B818F",
//       imageSrc: "/images/healthcoveragebook.png",
//       title: "Financing Universal Health Care in India (2016)",
//       type: "Report",
//       viewLink: "https://globalhealthstrategies.com/wp-content/uploads/2017/11/Financing-UHC-in-India-GHS-Nov-2017.pdf",
//     },
//     {
//       backgroundColor: "#A25C37",
//       imageSrc: "/images/globalsouthbook.png",
//       title: "G20 Report: Empowering the Global South(2023)",
//       type: "Report",
//       viewLink: "https://globalhealthstrategies.com/wp-content/uploads/2024/10/G20-report_GHSxORF.pdf",
//     },
//     {
//       backgroundColor: "#D4763D",
//       imageSrc: "/images/indonesiabook.png",
//       title:
//         "Indonesia: A Driving Force in Regional & Global Development(2024)",
//       type: "Report",
//       viewLink: "https://globalhealthstrategies.com/wp-content/uploads/2024/10/IndonesiaGHS-TAG-Report_24-Oct.pdf",
//     },
//     {
//       backgroundColor: "#3B818F",
//       imageSrc: "/images/cancercarebook.png",
//       title:
//         "TAKEDA (2025)",
//       type: "Report",
//       viewLink: "https://globalhealthstrategies.com/wp-content/uploads/2025/05/GHS-policy-brief_Alternative-Financing-for-Cancer-in-India.pdf",
//     },
//     {
//       backgroundColor: "#A25C37",
//       imageSrc: "/images/indonesiabook.png",
//       title:
//         "ICMR Photobook",
//       type: "Report",
//       viewLink: "https://drive.google.com/file/d/1KRNsVwJhPQOAV0kBBXSL4jtO5gtz-Xc4/view",
//     },
//     {
//       backgroundColor: "#D4763D",
//       imageSrc: "/images/indiabook.png",
//       title:
//         "India: The World's Pharmacy Expands its Reach in Global Health(2021)",
//       type: "Report",
//       viewLink: "https://drive.google.com/file/d/1IjdXiKC7K2PdEumI-MKdvxIg_HkoUTZU/view",
//     },
//   ];

//   return (
//     <div className="relative w-full min-h-screen bg-white">
//       <div className="flex">
//         {/* <div className="w-[65%] bg-gray-500 p-10 my-24 flex items-center justify-center"> */}
//         <div className="w-[65%]">
//           <Image
//             src="/images/resourcesImage.jpg"
//             alt="resource Header Image"
//             width={1277}
//             height={839}
//             className="my-24"
//           />
//         </div>

//         {/* Right side - 35% white background */}
//         <div className="w-[35%]">
//           {/* You can add content here for the right side */}
//         </div>

//         {/* Absolutely positioned Knowledge Hub box */}
//         <div className="absolute right-55 top-85 z-20">
//           <div className="bg-[#AC3F06] text-white p-6 w-95 shadow-lg">
//             <h1 className="text-[50px] font-bold leading-tight">
//               KNOWLEDGE
//               <br />
//               HUB
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* Filter bar in normal flow below the main content */}
//       <div className="w-full px-24 py-0">
//         <div className="bg-white p-4 ">
//           <div className="flex items-center justify-between">
//             {/* Left side - Filter icon, "I want to", and Type dropdown */}
//             <div className="flex items-center space-x-4">
//               {/* Filter icon */}
//               <div className="w-7 h-7">
//                 <TuneIcon
//                   style={{ color: "#4B5563", width: "24px", height: "24px" }}
//                 />
//               </div>

//               {/* "I want to" text */}
//               <span className="text-gray-700 text-lg font-medium">
//                 I want to
//               </span>

//               {/* Type dropdown */}
//               <div className="relative">
//                 <select className="appearance-none bg-white border text-black border-[#C9C9C9] px-4 py-1 pr-24  focus:outline-none focus:ring-2 focus:ring-[#AC3F06] focus:border-transparent">
//                   <option value="">Type</option>
//                   <option value="book">Book</option>
//                   <option value="article">Article</option>
//                   <option value="report">Report</option>
//                   <option value="case-study">Case Study</option>
//                 </select>
//                 <div className="absolute inset-y-0 right-0 flex items-center px-2 text-[#C9C9C9] pointer-events-none">
//                   <KeyboardArrowDownIcon
//                     style={{ width: "24px", height: "24px" }}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Right side - Search bar */}
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="border border-[#C9C9C9] px-4 py-1 text-black  focus:outline-none focus:ring-2 focus:ring-[#AC3F06] focus:border-transparent w-50"
//               />
//               <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                 <SearchIcon
//                   style={{ color: "#C9C9C9", width: "24px", height: "24px" }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="border text-black my-2"></div>

//       {/* Resources Section */}
//       <div className="w-full px-28 py-12">
//         {/* Resources Header */}
//         <div className="flex items-center justify-between mb-18">
//           <h2 className="text-5xl  font-bold text-[#5A9B9B] uppercase tracking-wide">
//             RESOURCES
//           </h2>
//           <a
//             href="#"
//             className="flex items-center text-gray-600 hover:text-[#AC3F06] transition-colors text-lg group"
//           >
//             <span className="mr-2 underline">View all</span>
//             <ArrowForwardIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </a>
//         </div>

//         {/* Resource Cards Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {resourceData.map((resource: ResourceData, index: number) => {
//             const isLastItem = index === resourceData.length - 1;
//             const isOddTotal = resourceData.length % 2 !== 0;
//             const shouldSpanFullWidth = isLastItem && isOddTotal;

//             return (
//               <div
//                 key={index}
//                 className={shouldSpanFullWidth ? "lg:col-span-2" : ""}
//               >
//                 <ResourceCard
//                   backgroundColor={resource.backgroundColor}
//                   imageSrc={resource.imageSrc}
//                   title={resource.title}
//                   type={resource.type}
//                   viewLink={resource.viewLink}
//                 />
//               </div>
//             );
//           })}
//         </div>

//         {/* View all watch content button */}
//         <div className="flex justify-end my-6 ">
//           <a
//             href="#"
//             className="flex items-center text-gray-600 hover:text-[#AC3F06] transition-colors text-lg group"
//           >
//             <span className="mr-2 underline">View all watch content</span>
//             <ArrowForwardIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;


import Image from "next/image";
import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Type definitions
interface ResourceData {
  backgroundColor: string;
  imageSrc: string;
  title: string;
  type: string;
  viewLink: string;
}

interface ResourceCardProps {
  backgroundColor: string;
  imageSrc: string;
  title: string;
  type: string;
  viewLink: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  backgroundColor,
  imageSrc,
  title,
  type,
  viewLink,
}) => {
  return (
    <div
      className="flex flex-col md:flex-row shadow-lg overflow-hidden h-auto md:h-100"
      style={{ backgroundColor }}
    >
      {/* Left side - image */}
      <div className="flex items-center justify-center py-6 px-6 md:pl-12 md:pr-0">
        <div className="w-40 h-56 md:w-52 md:h-72 relative shadow-lg">
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        </div>
      </div>

      {/* Right side - content */}
      <div className="flex-1 py-6 px-6 md:pl-6 md:pr-12 md:mt-12 flex flex-col justify-center">
        <span className="text-sm text-white tracking-wide mb-3">{type}</span>
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 leading-tight">
          {title}
        </h3>
        <div className="flex space-x-3 items-center">
          <a href={viewLink} target={`${viewLink ? "_blank": ""}`} rel="noopener noreferrer">
            <button className="px-6 md:px-8 py-1 text-sm border rounded-full border-white text-white hover:bg-white hover:text-gray-900 transition-colors">
              View
            </button>
          </a>
          <button className="px-5 md:px-6 py-1 border text-sm border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-colors">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

const Page: React.FC = () => {
  const resourceData: ResourceData[] = [
    {
      backgroundColor: "#3B818F",
      imageSrc: "/images/ppsabook.png",
      title: "Patient Provider Support Agency (PPSA) report (2023)",
      type: "Report",
      viewLink:
        "https://tbcindia.mohfw.gov.in/wp-content/uploads/2023/05/6897926685Creating-synergies-to-ensure-quality-TB-care_Compendium-of-PPSA-best-practices.pdf",
    },
    {
      backgroundColor: "#A25C37",
      imageSrc: "/images/ppsabook.png",
      title: "Patient Support System (PSS) report (2018)",
      type: "Report",
      viewLink: "",
    },
    {
      backgroundColor: "#D4763D",
      imageSrc: "/images/whobook.png",
      title:
        "WHO's Best Practices in Multisectoral Accountability Framework (MAF-TB) document (2022)",
      type: "Report",
      viewLink: "https://www.who.int/publications/i/item/9789240066069",
    },
    {
      backgroundColor: "#3B818F",
      imageSrc: "/images/healthcoveragebook.png",
      title: "Financing Universal Health Care in India (2016)",
      type: "Report",
      viewLink: "https://globalhealthstrategies.com/wp-content/uploads/2017/11/Financing-UHC-in-India-GHS-Nov-2017.pdf",
    },
    {
      backgroundColor: "#A25C37",
      imageSrc: "/images/globalsouthbook.png",
      title: "G20 Report: Empowering the Global South(2023)",
      type: "Report",
      viewLink: "https://globalhealthstrategies.com/wp-content/uploads/2024/10/G20-report_GHSxORF.pdf",
    },
    {
      backgroundColor: "#D4763D",
      imageSrc: "/images/indonesiabook.png",
      title:
        "Indonesia: A Driving Force in Regional & Global Development(2024)",
      type: "Report",
      viewLink: "https://globalhealthstrategies.com/wp-content/uploads/2024/10/IndonesiaGHS-TAG-Report_24-Oct.pdf",
    },
    {
      backgroundColor: "#3B818F",
      imageSrc: "/images/cancercarebook.png",
      title:
        "TAKEDA (2025)",
      type: "Report",
      viewLink: "https://globalhealthstrategies.com/wp-content/uploads/2025/05/GHS-policy-brief_Alternative-Financing-for-Cancer-in-India.pdf",
    },
    {
      backgroundColor: "#A25C37",
      imageSrc: "/images/indonesiabook.png",
      title:
        "ICMR Photobook",
      type: "Report",
      viewLink: "https://drive.google.com/file/d/1KRNsVwJhPQOAV0kBBXSL4jtO5gtz-Xc4/view",
    },
    {
      backgroundColor: "#D4763D",
      imageSrc: "/images/indiabook.png",
      title:
        "India: The World's Pharmacy Expands its Reach in Global Health(2021)",
      type: "Report",
      viewLink: "https://drive.google.com/file/d/1IjdXiKC7K2PdEumI-MKdvxIg_HkoUTZU/view",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Mobile Layout */}
      <div className="block px-4 md:hidden">
        {/* Knowledge Hub Card - Mobile */}
        <div className="bg-[#AC3F06] text-white p-6 mt-20 w-full mb-4">
          <h1 className="text-4xl font-bold leading-tight">
            KNOWLEDGE
            <br />
            HUB
          </h1>
        </div>

        {/* Image - Mobile */}
        <div className="w-full">
          <Image
            src="/images/resourcesImage.jpg"
            alt="resource Header Image"
            width={1277}
            height={839}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex">
        <div className="w-[65%]">
          <Image
            src="/images/resourcesImage.jpg"
            alt="resource Header Image"
            width={1277}
            height={839}
            className="my-24"
          />
        </div>

        <div className="w-[35%]"></div>

        {/* Absolutely positioned Knowledge Hub box - Desktop */}
        <div className="absolute right-55 top-85 z-20">
          <div className="bg-[#AC3F06] text-white p-6 w-95 shadow-lg">
            <h1 className="text-[50px] font-bold leading-tight">
              KNOWLEDGE
              <br />
              HUB
            </h1>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="w-full px-6 md:px-24 py-4">
        <div className="bg-white p-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Left side - Filter icon, "I want to", and Type dropdown */}
            <div className="flex items-center space-x-4">
              {/* Filter icon */}
              <div className="w-7 h-7">
                <TuneIcon
                  style={{ color: "#4B5563", width: "24px", height: "24px" }}
                />
              </div>

              {/* "I want to" text */}
              <span className="text-gray-700 text-base md:text-lg font-medium">
                I want to
              </span>

              {/* Type dropdown */}
              <div className="relative flex-1 md:flex-none">
                <select className="appearance-none bg-white border text-black border-[#C9C9C9] px-4 py-1 pr-12 md:pr-24 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-[#AC3F06] focus:border-transparent">
                  <option value="">Type</option>
                  <option value="book">Book</option>
                  <option value="article">Article</option>
                  <option value="report">Report</option>
                  <option value="case-study">Case Study</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-[#C9C9C9] pointer-events-none">
                  <KeyboardArrowDownIcon
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
              </div>
            </div>

            {/* Right side - Search bar */}
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search"
                className="border border-[#C9C9C9] px-4 py-1 text-black focus:outline-none focus:ring-2 focus:ring-[#AC3F06] focus:border-transparent w-full md:w-50"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <SearchIcon
                  style={{ color: "#C9C9C9", width: "24px", height: "24px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border text-black my-2"></div>

      {/* Resources Section */}
      <div className="w-full px-6 md:px-28 py-12">
        {/* Resources Header */}
        <div className="flex items-center justify-between mb-12 md:mb-18">
          <h2 className="text-3xl md:text-5xl font-bold text-[#5A9B9B] uppercase tracking-wide">
            RESOURCES
          </h2>
          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-[#AC3F06] transition-colors text-sm md:text-lg group"
          >
            <span className="mr-2 underline">View all</span>
            <ArrowForwardIcon className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {resourceData.map((resource: ResourceData, index: number) => {
            const isLastItem = index === resourceData.length - 1;
            const isOddTotal = resourceData.length % 2 !== 0;
            const shouldSpanFullWidth = isLastItem && isOddTotal;

            return (
              <div
                key={index}
                className={shouldSpanFullWidth ? "lg:col-span-2" : ""}
              >
                <ResourceCard
                  backgroundColor={resource.backgroundColor}
                  imageSrc={resource.imageSrc}
                  title={resource.title}
                  type={resource.type}
                  viewLink={resource.viewLink}
                />
              </div>
            );
          })}
        </div>

        {/* View all watch content button */}
        <div className="flex justify-end my-6">
          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-[#AC3F06] transition-colors text-sm md:text-lg group"
          >
            <span className="mr-2 underline">View all watch content</span>
            <ArrowForwardIcon className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;