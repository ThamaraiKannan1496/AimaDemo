import React from "react";
import dashboardImage from "../../assets/dashboard.jpg";
import CounterSection from "./CounterSection";
import EventsSection from "./EventsSection";
import EducationCapacitySection from "./Education&CapacityBuildingSection";
import ManagericalLeaderShipSection from "./Managerical&LeaderShipSection";
import CustomizedSolutionSection from "./CustomizedSolutionSelction";
import ContactSection from "./ContactSection";

const DashboardPage = () => {
  return (
    <>
      <section
        className="relative text-white w-full min-h-[85vh] bg-cover bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${dashboardImage})` }}
      >
        <div className="absolute inset-0 bg-blue-900/30"></div>
        {/* Text Content */}
        <div className="relative z-50 flex flex-col justify-center p-6 lg:pl-24 text-center lg:max-w-md xl:max-w-lg lg:text-left  -translate-y-10 sm:-translate-y-16 lg:-translate-y-18">
          <h2 className="text-base sm:text-lg md:text-xl font-normal tracking-wide mb-2 font-dmsans">
            Welcome to
          </h2>

          <h1 className="font-bold font-bower leading-tight mb-3 py-3">
            <span className="text-3xl sm:text-[68px] md:text-6xl lg:text-[68px] whitespace-wrap xl:whitespace-nowrap">
              All India Management <br />
              Association
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal whitespace-wrap xl:whitespace-nowrap mt-1">
            The National Apex Body of Management in India
          </p>
        </div>
      </section>

      {/* 🟦 Info + Buttons Section */}
      <div className="w-full text-center py-10 px-4 sm:px-8 md:px-12 bg-linear-to-r from-[#FEFEFE]/95 to-[#F0F6FF]/95">
        <p className="text-black text-base sm:text-lg md:text-xl font-dmsans font-medium mb-8 max-w-6xl mx-auto">
          The All India Management Association (AIMA) is the Voice of India’s
          Leaders and Managers, and the apex body of the management profession
          in India. AIMA is a not-for-profit, non-lobbying organisation, and
          works closely with Industry, Government, Academia, and students to
          further the cause of the management profession in India.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 mt-4">
          {[
            "PGDM",
            "MAT",
            "REGISTER FOR MAT SEPTEMBER 2025",
            "AIMA – 52ND NATIONAL MANAGEMENT CONVENTION 2025",
          ].map((btn, i) => (
            <button
              key={i}
              className={`border-2 border-[#0056A2] text-[#0056A2] font-bold px-2 py-0 rounded-md min-h-[60px] cursor-pointer sm:min-h-[70px] md:min-h-[80px] w-[90%] sm:w-[250px] md:w-[270px] hover:bg-[#0056A2]/20 transition bg-white font-dmsans
        ${
          i < 2
            ? "text-[20px] sm:text-[26px] md:text-[32px]" //  first two
            : "text-sm md:text-base"
        }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      {/* 🔢 Other Sections */}
      <CounterSection />
      <EventsSection />
      <EducationCapacitySection />
      <ManagericalLeaderShipSection />
      <CustomizedSolutionSection />
      <ContactSection />
    </>
  );
};

export default DashboardPage;
