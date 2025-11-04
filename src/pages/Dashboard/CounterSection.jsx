import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import counterBg from "../../assets/counterbg.jpg";

const CounterSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center text-white text-center mx-auto my-12 rounded-lg overflow-hidden w-full max-w-7xl px-4 sm:px-6 md:px-8"
      style={{ minHeight: "300px" }}
    >
      {/* Background Image */}
      <img
        src={counterBg}
        alt="Counter Background"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-10"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#0056A2CC]/[0.99] z-10"></div>

      {/* Counter Content */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 z-20 font-bower py-6 text-white">
        <div className="relative flex flex-col justify-center h-full md:border-r md:border-white border-opacity-60">
          <h2 className="text-3xl md:text-7xl font-bold">
            {inView && <CountUp start={0} end={6000} duration={2} />}+
          </h2>
          <p className="text-base md:text-lg mt-2 font-dmsans">
            Corporate Members
          </p>
        </div>

        <div className="relative flex flex-col justify-center h-full md:border-r md:border-white border-opacity-60">
          <h2 className="text-3xl md:text-7xl font-bold">
            {inView && <CountUp start={0} end={38000} duration={2.5} />}+
          </h2>
          <p className="text-base md:text-lg mt-2 font-dmsans">
            Members Across India
          </p>
        </div>

        <div className="relative flex flex-col justify-center h-full">
          <h2 className="text-3xl md:text-7xl font-bold">
            {inView && <CountUp start={0} end={68} duration={2} />}+
          </h2>
          <p className="text-base md:text-lg mt-2 font-dmsans">
            Local Management Associations
          </p>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
