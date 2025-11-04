import { ArrowRight, MapPin } from "lucide-react";
import { ChevronRight } from "lucide-react";
import EducationBG from "../../assets/EducationBG.jpg";
import ed1 from "../../assets/EducationOne.jpg";
import ed2 from "../../assets/EducationTwo.jpg";
import ed3 from "../../assets/EducationThree.jpg";
import rr1 from "../../assets/rr1.png";
import rr2 from "../../assets/rr2.png";
import rr3 from "../../assets/rr3.png";
import rr4 from "../../assets/rr4.png";
import rr5 from "../../assets/rr5.png";
import rr6 from "../../assets/rr6.png";

const programs = [
  {
    id: 1,
    img: ed1,
    title: "Academic Programmes",
    description:
      "The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today, it served as a placeholder for actual content.",
  },
  {
    id: 2,
    img: ed2,
    title: "Trainings & Workshops",
    description:
      "The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today, it served as a placeholder for actual content.",
  },
  {
    id: 3,
    img: ed3,
    title: "Professional Certifications",
    description:
      "The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today, it served as a placeholder for actual content.",
  },
];

const researchReports = [
  {
    id: 1,
    items: [
      {
        icon: rr1,
        title: "MCDI India 2024 Report",
      },
      {
        icon: rr2,
        title: "Case Catalogue",
      },
    ],
  },
  {
    id: 2,
    items: [
      {
        icon: rr3,
        title: "Casepedia the Case Journal",
      },
      {
        icon: rr4,
        title: "AIMA – KMPG Collaborative Research",
      },
    ],
  },
  {
    id: 3,
    items: [
      {
        icon: rr5,
        title: "Casepedia the Case Journal",
      },
      {
        icon: rr6,
        title: "Industry Best Practice Case",
      },
    ],
  },
];

const EducationCapacitySection = () => {
  return (
    <section className="relative overflow-hidden rounded-tl-[150px] sm:rounded-tl-[200px] mt-32">
      {/* Hero Section */}
      <div className="relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${EducationBG})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "600px",
            width: "100%",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Title */}
        <div className="relative z-10 text-center text-white sm:pt-24 top-20 pt-30">
          <h2 className="text-white text-base sm:text-lg md:text-xl font-bold uppercase leading-relaxed mb-3 font-dmsans tracking-wider">
            Building Strong Foundations
          </h2>
          <h1
            className="text-4xl md:text-[64px] font-bold text-white font-bower"
            data-aos="zoom-in-left"
          >
            Education & Capacity Building
          </h1>
        </div>

        {/* Programs Cards */}
        <div className="relative z-20 pb-20 top-40 sm:top-70">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-[#F1F5FC] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="zoom-in-up"
              >
                <div className="bg-[#F1F5FC]">
                  <img
                    src={program.img}
                    alt={program.title}
                    className="w-full h-72 object-cover p-2 bg-[#F1F5FC] rounded-2xl"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base md:text-lg font-bold text-black font-bower">
                      {program.title}
                    </h3>
                    <ChevronRight
                      strokeWidth={1}
                      className="text-[#0056A2] font-light"
                    />
                  </div>
                  <p className="text-black text-xs leading-relaxed font-normal font-dmsans pb-3">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research & Reports Section */}
      <div className="relative py-0 sm:py-16 mt-0 sm:mt-12 md:mt-24 top-[140px] mb-12 sm:top-[90px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-black font-dmsans">
              RESEARCH & REPORTS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {researchReports.map((column) =>
              column.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white cursor-pointer rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 overflow-hidden bg-gray-100">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-black">
                        {item.title}
                      </h4>
                    </div>
                    <ChevronRight
                      size={30}
                      strokeWidth={1}
                      className="text-[#0056A2] font-light"
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCapacitySection;
