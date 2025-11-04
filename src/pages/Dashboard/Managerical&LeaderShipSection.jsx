import { ArrowRight, MapPin } from "lucide-react";
import { ChevronRight } from "lucide-react";
import EducationBG from "../../assets/ManagerBG.jpg";
import man1 from "../../assets/manager1.jpg";
import man2 from "../../assets/manager2.jpg";
import man3 from "../../assets/manager3.jpg";
import ExpLearn from "../../assets/expLearning.jpg";

const events = [
  {
    img: man1,
    title: "International MDPs",
    content:
      "The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today, it served as a placeholder for actual content.",
  },
  {
    img: man2,
    title: "Domestic MDPs",
    content:
      "The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today, it served as a placeholder for actual content.",
  },
  {
    img: man3,
    title: "Case Study Contests",
    content:
      "The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today, it served as a placeholder for actual content.",
  },
];

const experientialLearning = {
  image: ExpLearn,
  title: "Experiential Learning",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};

const ManagerialLeadershipSection = () => {
  return (
    <section className="relative overflow-hidden rounded-tr-[150px] sm:rounded-tr-[200px] mt-14 md:mt-18 ">
      {/* 🌆 Event Cards Section */}
      <div className="relative ">
        {/* Background */}
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

        {/* Title inside image */}
        <div className="relative z-10 text-center text-white sm:pt-24 top-20 pt-30">
          <h2 className="text-white text-base sm:text-lg md:text-xl font-bold uppercase leading-relaxed mb-3 font-dmsans tracking-wider">
            From Managers to Leaders
          </h2>
          <h2 className="text-4xl md:text-[64px] font-bold text-white font-bower">
            Managerial & Leadership Development
          </h2>
        </div>

        {/* Cards */}
        <div className="relative  z-50 pb-0 top-40 sm:top-70">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6">
            {events.map((event, index) => (
              <div
                key={index}
                className=" rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-[#F1F5FC]">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-72 object-cover p-2 bg-[#F1F5FC] rounded-2xl"
                  />
                </div>

                <div className="p-5 bg-[#F1F5FC]">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base md:text-lg font-bold text-black font-bower">
                      {event.title}
                    </h3>
                    <ChevronRight
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

      {/*  Learning Section */}
      <div className="relative py-20 pt-50 sm:pt-90 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[#E9EFFB] rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch md:items-center">
            {/* Image Section */}
            <div className="w-full md:w-[55%] h-64 sm:h-80 md:h-auto">
              <img
                src={experientialLearning.image}
                alt={experientialLearning.title}
                className="w-full h-full object-cover md:rounded-l-3xl"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-[45%] p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl md:text-4xl font-bower font-bold text-black">
                  {experientialLearning.title}
                </h2>
                <ChevronRight
                  size={30}
                  strokeWidth={1}
                  className="text-[#0056A2] shrink-0"
                />
              </div>
              <p className="text-black text-xs sm:text-sm md:text-base font-dmsans leading-relaxed">
                {experientialLearning.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagerialLeadershipSection;
