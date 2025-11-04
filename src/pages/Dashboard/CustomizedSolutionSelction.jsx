import { ArrowRight, MapPin } from "lucide-react";
import { ChevronRight } from "lucide-react";
import solBg from "../../assets/solutionsBG.jpg";
import sol1 from "../../assets/sol1.jpg";
import sol2 from "../../assets/sol2.jpg";
import sol3 from "../../assets/sol3.jpg";

const events = [
  {
    img: sol1,
    title: "Testing & Assessment",
    content:
      "The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today, it served as a placeholder for actual content.",
  },
  {
    img: sol2,
    title: "In Company Training",
    content:
      "The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today, it served as a placeholder for actual content.",
  },
  {
    img: sol3,
    title: "Consultancy Projects",
    content:
      "The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today, it served as a placeholder for actual content.",
  },
];

const CustomizedSolutionSection = () => {
  return (
    <section className="relative overflow-hidden top-0 lg:top-[50px] pb-[290px] ">
      {/* 🌆 Event Cards Section */}
      <div className="relative">
        {/* Background */}
        <div
          className="absolute inset-0 bg-black rounded-tl-[150px] sm:rounded-tl-[200px] overflow-hidden z-10"
          style={{
            backgroundImage: `url(${solBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "600px",
            width: "100%",
          }}
        >
          {" "}
          <div className="absolute inset-0 bg-black/70 rounded-tl-[150px] sm:rounded-tl-[200px]"></div>
        </div>

        {/* Title inside image */}
        <div className="relative z-10 text-center top-20 sm:pt-24">
          <h2 className="text-white text-base sm:text-lg md:text-xl font-bold uppercase leading-relaxed mb-3 font-dmsans tracking-wider px-6">
            Smart Approaches for Unique Challenges
          </h2>
          <h2 className="text-4xl md:text-[64px] font-bold text-white font-bower">
            Customised Solutions
          </h2>
        </div>

        {/* Cards */}
        <div className="relative z-30 pb-14 top-65">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 bg-[#F1F5FC] "
              >
                <img
                  src={event.img}
                  alt={event.title}
                  className=" w-full h-72 object-cover p-2 bg-[#F1F5FC] rounded-2xl"
                />
                <div className="p-5 bg-[#F1F5FC]">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base md:text-lg font-bold text-black font-bower">
                      {event.title}
                    </h3>
                    <ChevronRight
                      size={30}
                      strokeWidth={1}
                      className="text-[#0056A2] font-light"
                    />
                  </div>
                  <p className="text-black text-xs leading-relaxed font-normal font-dmsans pb-3">
                    {event.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizedSolutionSection;
