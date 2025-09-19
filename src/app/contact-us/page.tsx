import { LocationOn, Mail } from "@mui/icons-material";
import React from "react";

export default function ContactUs() {
  return (
    <div className="min-h-screen">
      <div className="w-full bg-[#D4763D]">
        <div className="container mx-auto max-w-7xl py-28">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mt-10">
            {/* Left Side - Contact Information */}
            <div className="flex-1 text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-12 tracking-wide">
                CONTACT US
              </h1>

              <div className="flex items-center gap-4 text-lg lg:text-xl">
                <Mail style={{ fontSize: "40px" }} />
                <span>info@globalhealthstrategies.com</span>
              </div>
            </div>

            {/* Right Side - Google Map */}
            <div className="w-full max-w-3xl">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9220794059306!2d77.17451632528564!3d28.542061725714248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1adc17786cbf%3A0x87a4b78c127a0133!2sGlobal%20Health%20Strategies!5e0!3m2!1sen!2sin!4v1758316812070!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Global Health Strategies Location"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations Section */}
      <div className="bg-white py-28">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Grid Layout for Offices */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Horizontal Line - positioned higher */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-black transform -translate-y-1/2 hidden md:block"></div>

            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-black transform -translate-x-1/2 hidden md:block"></div>

            {/* India Section with New Delhi Office */}
            <div className="relative z-10 bg-white px-4">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-black ml-8">India</h2>
              </div>
              <div className="flex items-start gap-3 mb-6">
                <LocationOn
                  className="text-black mt-1"
                  style={{ fontSize: "25px" }}
                />
                <div>
                  <h3 className="font-semibold text-xl text-black mb-2">
                    New Delhi
                  </h3>
                  <div className="text-black text-xl space-y-1">
                    <p>18/1, 4th floor, Shaheed Bhawan</p>
                    <p>Aruna Asaf Ali Marg</p>
                    <p>New Delhi – 110067 Delhi, India</p>
                    <p>Tel: +91 11 4656 4590</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lucknow Office */}
            <div className="relative z-10 bg-white px-4 md:pt-16">
              <div className="flex items-start gap-3 mb-6">
                <LocationOn
                  className="text-black mt-1"
                  style={{ fontSize: "25px" }}
                />
                <div>
                  <h3 className="font-semibold text-xl text-black mb-2">
                    Lucknow
                  </h3>
                  <div className="text-black text-xl space-y-1">
                    <p>1st Floor, 35-G Gokhale Marg,</p>
                    <p>Lucknow – 226001</p>
                    <p>Uttar Pradesh, India</p>
                    <p>Tel: +91 52 2495 4311</p>
                  </div>
                </div>
              </div>
            </div>

            {/* South Africa Office */}
            <div className="relative z-10 bg-white px-4">
              <div className="flex items-start gap-3">
                <LocationOn
                  className="text-black mt-1"
                  style={{ fontSize: "25px" }}
                />
                <div>
                  <h3 className="font-semibold text-xl text-black mb-2">
                    South Africa
                  </h3>
                  <div className="text-black text-xl space-y-1">
                    <p>Global Health Strategies</p>
                    <p>Unit G1003, First Floor, Hyde Gate, Hyde Park Lane,</p>
                    <p>Corner of William Nichol Drive and Jan Smuts</p>
                    <p>Avenue,</p>
                    <p>Hyde Park, Sandton, Johannesburg, Gauteng, 2196,</p>
                    <p>South Africa</p>
                    <p>Tel: +27871488920 -9</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kenya Office */}
            <div className="relative z-10 bg-white px-4">
              <div className="flex items-start gap-3">
                <LocationOn
                  className="text-black mt-1"
                  style={{ fontSize: "25px" }}
                />
                <div>
                  <h3 className="font-semibold text-xl text-black mb-2">
                    Kenya
                  </h3>
                  <div className="text-black text-xl space-y-1">
                    <p>Global Health Strategies Africa Ltd.</p>
                    <p>The Address, Muthangari Drive</p>
                    <p>7th Floor at Workstyle Africa,</p>
                    <p>Westlands, Nairobi, Kenya</p>
                    <p>Tel: +254110071426</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Separator Line */}
          <div className="w-full h-px bg-black mt-12 hidden md:block"></div>

          {/* Jakarta Office */}
          <div className="max-w-5xl pt-8 px-4 md:pt-12">
            <div className="flex items-start gap-3">
              <LocationOn
                className="text-black mt-1"
                style={{ fontSize: "25" }}
              />
              <div>
                <h3 className="font-semibold text-xl text-black mb-2">
                  JAKARTA
                </h3>
                <div className="text-black text-xl space-y-1">
                  <p>Office No. PO 901,</p>
                  <p>PT. Gema Buana Nusantara Plaza Mutiara,</p>
                  <p>
                    8th Floor, Jalan Dr. Ide Anak Agung Gde Agung Kav. E.1.2 No.
                    1&2,
                  </p>
                  <p>(d/h Jl. Lingkar Mega Kuningan E.1.2.D.08.2/LT.8),</p>
                  <p>Jakarta Selation 12950,</p>
                  <p>Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
