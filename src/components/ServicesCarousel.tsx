import { useState } from "react";
import CampaignIcon from "@mui/icons-material/Campaign";
import PolicyIcon from "@mui/icons-material/Policy";
import ShareIcon from "@mui/icons-material/Share";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SchoolIcon from "@mui/icons-material/School";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import LightBulbIcon from "@mui/icons-material/Lightbulb";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Image from "next/image";

interface Service {
  id: number;
  title: string;
  iconSrc: string;
  iconAlt: string;
}

export default function ServicesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Media and Communications",
      iconSrc: "/icons/media_and_communication.svg",
      iconAlt: "Media and communications icon",
    },
    {
      id: 2,
      title: "Policy Analysis and Strategy",
      iconSrc: "/icons/policy_analysis.svg",
      iconAlt: "Policy analysis icon",
    },
    {
      id: 3,
      title: "Social Media & Digital Health",
      iconSrc: "/icons/social_media.svg",
      iconAlt: "Social media icon",
    },
    {
      id: 4,
      title: "Conference Production & Communications",
      iconSrc: "/icons/conference.svg",
      iconAlt: "Research and analytics icon",
    },
    {
      id: 5,
      title: "Fiscal and Market Analysis",
      iconSrc: "/icons/fiscal_market_analysis.svg",
      iconAlt: "Training icon",
    },
    {
      id: 6,
      title: "Community Engagement",
      iconSrc: "/icons/community_engagement.svg",
      iconAlt: "Partnership development icon",
    },
    {
      id: 7,
      title: "Coalition and Champion Building",
      iconSrc: "/icons/coalition_champion.svg",
      iconAlt: "Program evaluation icon",
    },
  ];

  const totalSlides = 3; // 3 groups of 3 cards each

  const getCurrentServices = () => {
    const startIndex = currentSlide * 3;
    return services.slice(startIndex, startIndex + 3);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div>
      {/* Service Cards */}
      <div className="flex justify-center gap-10 mb-20 h-[350px]">
        {getCurrentServices().map((service, index) => (
          <div
            key={service.id}
            className={`relative w-85 px-5 py-12 rounded-3xl transition-all duration-300 cursor-pointer transform flex flex-col justify-between ${
              hoveredCard === service.id
                ? "bg-[#3B818F] text-white shadow-xl"
                : "bg-[#F3F3F3] text-[#3B818F] hover:shadow-lg"
            }`}
            style={{
              height: hoveredCard === service.id ? '380px' : '350px',
              transformOrigin: 'top center'
            }}
            onMouseEnter={() => setHoveredCard(service.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Icon at top */}
            <div className="flex justify-center mb-4">
              <div>
                <Image
                  src={service.iconSrc}
                  alt={service.iconAlt}
                  width={130}
                  height={130}
                  className={`transition-colors duration-300 ${
                    hoveredCard === service.id 
                      ? "filter brightness-0 invert" // Makes SVG white when hovered
                      : ""
                  }`}
                  style={{
                    filter: hoveredCard === service.id 
                      ? "brightness(0) invert(1)" 
                      : "none"
                  }}
                />
              </div>
            </div>

            {/* Title at bottom */}
            <h3
              className={`text-4xl font-medium text-center leading-tight ${
                hoveredCard === service.id ? "text-white" : "text-[#3B818F]"
              }`}
            >
              {service.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center space-x-8">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="w-12 h-12 rounded-full border-2 border-[#3B818F] text-[#3B818F] flex items-center justify-center hover:bg-[#3B818F] hover:text-white transition-colors duration-300"
        >
          <ChevronLeftIcon />
        </button>

        {/* Progress Bar */}
        <div className="relative w-32 h-1 bg-gray-300 rounded">
          {/* Blue active section - covers exactly 1/3 of the line and moves by 1/3 increments */}
          <div
            className="absolute top-0 h-1 bg-[#3B818F] rounded transition-all duration-300"
            style={{
              left: `${(currentSlide * 100) / 3}%`,
              width: "33.333%",
            }}
          ></div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full border-2 border-[#3B818F] text-[#3B818F] flex items-center justify-center hover:bg-[#3B818F] hover:text-white transition-colors duration-300"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}