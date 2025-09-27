"use client";
import Image from "next/image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useState, useEffect } from "react";
import ServicesCarousel from "@/components/ServicesCarousel";
import Link from "next/link";

interface ImpactStat {
  value: string;
  label: string;
  iconSrc: string; 
  iconAlt: string;
}

interface Leader {
  name: string;
  designation: string;
}

interface LeadershipData {
  [key: string]: Leader[];
}

interface CarouselImage {
  src: string;
  alt: string;
}

type Region = "GLOBAL" | "ASIA" | "AFRICA";

export default function Home() {
  const [activeRegion, setActiveRegion] = useState<Region>("GLOBAL");
  const [currentLeaderIndex, setCurrentLeaderIndex] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const regions: Region[] = ["GLOBAL", "ASIA", "AFRICA"];

  // Carousel images - replace these with your actual image paths
  const carouselImages: CarouselImage[] = [
    { src: "/images/teamImage.png", alt: "Global Health Strategies team meeting" },
    { src: "https://thumbs.dreamstime.com/b/climbing-helping-team-work-success-concept-concepts-64120507.jpg", alt: "Global Health Strategies conference" },
    { src: "https://img.freepik.com/free-photo/silhouette-confident-businesspeople_1098-1768.jpg?semt=ais_hybrid&w=740&q=80", alt: "Global Health Strategies fieldwork" },
    { src: "https://images.ctfassets.net/pdf29us7flmy/1tAhoHgjtm3IJsKIzMpbV0/67820b755f89d35e9fabad6f05dcd95b/Team_leader_-_creative.jpg?w=720&q=100&fm=jpg", alt: "Global Health Strategies collaboration" },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => 
          prev === carouselImages.length - 1 ? 0 : prev + 1
        );
      }, 4000); // Change image every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, carouselImages.length]);

  // Sample leadership data - you can replace with your actual data
  const leadershipData: LeadershipData = {
    GLOBAL: [
      { name: "DAVID GOLD", designation: "CEO & FOUNDER" },
      { name: "ANJALI NAYYAR", designation: "GLOBAL DIRECTOR" },
      { name: "LINN DORIN", designation: "STRATEGY HEAD" },
    ],
    ASIA: [
      { name: "HITESH MAHAJAN", designation: "REGIONAL DIRECTOR" },
      { name: "ANJALI NAYYAR", designation: "OPERATIONS MANAGER" },
      { name: "NILANJANA BOSE", designation: "PROGRAM COORDINATOR" },
      { name: "SUCHI MAHAJAN", designation: "PROGRAM COORDINATOR" },
      { name: "KAUSHIK BOSE", designation: "PROGRAM COORDINATOR" },
    ],
    AFRICA: [
      { name: "ANJALI NAYYAR", designation: "REGIONAL DIRECTOR" },
      { name: "SARAH ANDRIES", designation: "HEALTH ADVISOR" },
      { name: "SIKELELWA (SIKI) GEYA MDINGI", designation: "COMMUNITY LIAISON" },
      { name: "NATASHA GODINHO", designation: "COMMUNITY LIAISON" },
    ],
  };

  const currentLeaders: Leader[] = leadershipData[activeRegion];

  const handlePrevious = (): void => {
    setCurrentLeaderIndex((prev: number) =>
      prev === 0 ? currentLeaders.length - 1 : prev - 1
    );
  };

  const handleNext = (): void => {
    setCurrentLeaderIndex((prev: number) =>
      prev === currentLeaders.length - 1 ? 0 : prev + 1
    );
  };

  // Reset leader index when region changes
  const handleRegionChange = (region: Region): void => {
    setActiveRegion(region);
    setCurrentLeaderIndex(0);
  };

  // Image carousel navigation functions
  const handlePreviousImage = (): void => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev: number) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNextImage = (): void => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev: number) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToImage = (index: number): void => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(index);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const impactStats: ImpactStat[] = [
    { value: "75+", label: "Countries", iconSrc: "/icons/75+Countries.svg", iconAlt: "Countries Icon" },
    {
      value: "120+",
      label: "Health Campaigns",
      iconSrc: "/icons/health_campaigns.svg", iconAlt: "Health Icon"
    },
    { value: "500M+", label: "Lives Touched", iconSrc: "/icons/lives_touched.svg", iconAlt: "Lives Icon" },
    {
      value: "1000+",
      label: "Strategic Partners",
      iconSrc: "/icons/strategic_partners.svg", iconAlt: "partners Icon"
    },
    {
      value: "50+",
      label: "Global Health Experts",
      iconSrc: "/icons/global_health_experts.svg", iconAlt: "experts Icon"
    },
    { value: "20", label: "Years of Impact", iconSrc: "/icons/20_years_of_impact.svg", iconAlt: "impact Icon" },
  ];

  return (
    <>
      <div className="relative bg-[#FBFBFB]">
        <div className="w-full mx-auto mb-32">
          <div className="flex">
            {/* Left Side - Text Content */}
            <div className="flex-1 flex flex-col justify-evenly pl-8 pr-4 pt-44">
              {/* Text Content */}
              <div className="mt-32 ml-24 max-w-7xl">
                <h2 className="text-2xl font-light text-gray-800 leading-relaxed">
                  Impacting Lives and
                  <br />
                  Providing Solutions
                  <br />
                  for Sustainable Healthcare
                </h2>
              </div>
            </div>

            {/* Right Side - Image Carousel with overlapping red box */}
            <div className="relative w-[70%] h-[600px]">
              {/* Image Carousel Container */}
              <div className="relative w-full h-full overflow-hidden">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover shadow-2xl"
                    />
                  </div>
                ))}

                {/* Carousel Navigation Arrows */}
                <button
                  onClick={handlePreviousImage}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <ChevronLeftIcon />
                </button>
                
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <ChevronRightIcon />
                </button>

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentImageIndex
                          ? "bg-white"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Red Overlay Box - positioned to overlap image */}
              <div className="absolute -left-83 top-44 z-20">
                <div className="bg-[#AC3F06] text-white p-10 w-88 shadow-lg">
                  <h1 className="text-[40px] font-bold leading-tight">
                    ASIA AND
                    <br />
                    AFRICA
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#FFD22D] py-16 mb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
              {impactStats.map((stat: ImpactStat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <div className="w-24 h-24 border-2 border-black rounded-full flex items-center justify-center mb-4">
                    {/* Render the icon component dynamically */}
                    <Image
                      src={stat.iconSrc}
                      alt={stat.iconAlt}
                      width={70}
                      height={70}
                      className="text-black"
                    />
                  </div>
                  <p className="text-4xl font-medium text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-xl text-gray-800 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About GHS Section */}
        <div className="relative bg-[#3B818F] py-28 ">
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="absolute -top-45 right-0 z-10">
              <div className="w-60 h-60">
                <Link href="/where-we-are">
                  <img
                    src="/images/earthImage.jpg"
                    alt="Earth Globe"
                    className="w-full h-full rounded-full object-cover shadow-lg cursor-pointer hover:shadow-xl hover:opacity-80 transition-shadow duration-300"
                  />
                </Link>
              </div>
            </div>

            <div className="text-center text-white">
              <h2 className="text-5xl font-bold mb-16 tracking-wide">
                ABOUT GHS
              </h2>

              <h3 className="text-4xl font-light mb-12 tracking-wide">
                GLOBAL HEALTH STRATEGIES AT A GLANCE
              </h3>

              <div className="max-w-5xl mx-auto space-y-5">
                <p className="text-xl leading-relaxed">
                  The People Behind the Mission <br />
                  Rooted in a deep commitment to advancing health equity, we
                  bring together strategy, advocacy, and communications to
                  influence change at both local and global levels. Our
                  multicultural team operates across continents, drawing on
                  regional expertise to shape powerful narratives and drive
                  meaningful partnerships.
                </p>

                <p className="text-xl leading-relaxed mb-14">
                  With every initiative, we aim to amplify critical issues,
                  mobilize resources, and support movements that create lasting
                  impact in global health and development.
                </p>
              </div>

              <button className=" flex items-center mx-auto bg-transparent border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#4A90A4] transition-colors duration-300 font-medium tracking-wide">
                DISCOVER FULL STORY{" "}
                <span className="w-6 h-6 ml-2 rounded-full flex items-center justify-center bg-transparent border-2 hover:bg-white hover:border-[#4A90A4] hover:text-[#4A90A4] transition-colors duration-300">
                  <ChevronRightIcon
                    sx={{ verticalAlign: "top", fontSize: 20 }}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Governance Structure Section Title */}
          <div className="mt-20 text-center">
            <h2 className="text-4xl font-light text-white tracking-wide">
              GOVERNANCE STRUCTURE - LEADERSHIP
            </h2>

            {/* Region Tabs */}
            <div className="flex justify-center mt-14 mb-16">
              <div className="flex bg-white/20 overflow-hidden">
                {regions.map((region: Region) => (
                  <button
                    key={region}
                    onClick={() => handleRegionChange(region)}
                    className={`px-28 py-2 text-[22px] font-bold border-r-1 border-gray-300 last:border-r-0 transition-colors duration-300 ${
                      activeRegion === region
                        ? "bg-[#D2691E] text-white"
                        : "text-white hover:bg-white/20"
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>

            {/* Leadership Display - Carousel Style */}
            <div className="flex items-center justify-center space-x-48 mb-14">
              {/* Previous Leader (Left) */}
              <div className="text-center opacity-50 transform scale-75 transition-all duration-300">
                <div className="bg-white/70 text-[#4A90A4] px-7 py-0.5 mb-3 inline-block">
                  <h4 className="text-lg font-medium">
                    {
                      currentLeaders[
                        (currentLeaderIndex - 1 + currentLeaders.length) %
                          currentLeaders.length
                      ].name
                    }
                  </h4>
                </div>
                <p className="text-white text-sm ">
                  {
                    currentLeaders[
                      (currentLeaderIndex - 1 + currentLeaders.length) %
                        currentLeaders.length
                    ].designation
                  }
                </p>
              </div>

              {/* Current Leader (Center) */}
              <div className="text-center opacity-100 transform scale-100 transition-all duration-300 min-w-[300px]">
                <div className="bg-white text-[#4A90A4] px-10 py-1 mb-3 inline-block">
                  <h3 className="text-xl font-medium">
                    {currentLeaders[currentLeaderIndex].name}
                  </h3>
                </div>
                <p className="text-white text-lg">
                  {currentLeaders[currentLeaderIndex].designation}
                </p>
              </div>

              {/* Next Leader (Right) */}
              <div className="text-center opacity-50 transform scale-75 transition-all duration-300">
                <div className="bg-white/70 text-[#4A90A4] px-7 py-0.5 mb-3 inline-block">
                  <h4 className="text-lg font-medium">
                    {
                      currentLeaders[
                        (currentLeaderIndex + 1) % currentLeaders.length
                      ].name
                    }
                  </h4>
                </div>
                <p className="text-white text-sm">
                  {
                    currentLeaders[
                      (currentLeaderIndex + 1) % currentLeaders.length
                    ].designation
                  }
                </p>
              </div>
            </div>

            {/* Navigation Buttons - Below the carousel */}
            <div className="flex items-center justify-center space-x-5 mb-6">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#4A90A4] transition-colors duration-300"
              >
                <ChevronLeftIcon />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#4A90A4] transition-colors duration-300"
              >
                <ChevronRightIcon />
              </button>
            </div>

            {/* Our Work Section */}
            <div className="text-center text-white mt-24">
              <h2 className="text-4xl font-light text-white tracking-wide mb-8">
                OUR WORK
              </h2>

              <div className="max-w-5xl mx-auto mb-12">
                <p className="text-xl leading-relaxed">
                  We partner with leading organizations to drive change that
                  improves lives. We assist our clients in navigating complexity
                  with clarity and purpose by having a thorough awareness of the
                  landscape- including issues, policies, and people. With teams
                  across the globe, we blend local insight with global
                  perspective—amplifying voices, advancing priorities, and
                  helping ideas move from vision to action.
                </p>
              </div>

              <button className="flex items-center mx-auto bg-transparent border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#4A90A4] transition-colors duration-300 font-medium tracking-wide">
                READ MORE
                <span className="w-6 h-6 ml-2 rounded-full flex items-center justify-center bg-transparent border-2 hover:bg-white hover:border-[#4A90A4] hover:text-[#4A90A4] transition-colors duration-300">
                  <ChevronRightIcon
                    sx={{ verticalAlign: "top", fontSize: 20 }}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-28">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-[#3B818F] mb-12 tracking-wide">
                SERVICES
              </h2>

              {/* Services Carousel */}
              <div>
                <ServicesCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}