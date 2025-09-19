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

export default function ServicesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Media and communications",
      IconComponent: CampaignIcon,
    },
    {
      id: 2,
      title: "Policy Analysis and Strategy",
      IconComponent: PolicyIcon,
    },
    {
      id: 3,
      title: "Social media & digital health",
      IconComponent: ShareIcon,
    },
    {
      id: 4,
      title: "Research & Data Analytics",
      IconComponent: AnalyticsIcon,
    },
    {
      id: 5,
      title: "Training & Capacity Building",
      IconComponent: SchoolIcon,
    },
    {
      id: 6,
      title: "Partnership Development",
      IconComponent: ConnectWithoutContactIcon,
    },
    {
      id: 7,
      title: "Program Evaluation",
      IconComponent: AssessmentIcon,
    },
    {
      id: 8,
      title: "Health Communications",
      IconComponent: HealthAndSafetyIcon,
    },
    {
      id: 9,
      title: "Digital Innovation",
      IconComponent: LightBulbIcon,
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
            className={`relative w-85 px-5 py-10 rounded-3xl transition-all duration-300 cursor-pointer transform flex flex-col justify-between ${
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
              <div
                className={`w-28 h-28 rounded-lg flex items-center justify-center ${
                  hoveredCard === service.id ? "bg-white/20" : "bg-[#3B818F]/10"
                }`}
              >
                <service.IconComponent
                  sx={{
                    fontSize: 100,
                    color: hoveredCard === service.id ? "white" : "#3B818F",
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