import { ArrowRight, MapPin } from "lucide-react";
import { ChevronRight } from "lucide-react";
import eventBg from "../../assets/eventbg.jpg";
import upcomingEvent from "../../assets/upcomingEvents.jpg";
import event1 from "../../assets/personOne.png";
import event2 from "../../assets/personTwo.png";
import event3 from "../../assets/personThree.png";

const events = [
  {
    img: event1,
    title: "Flagship",
    content:
      "The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today, it served as a placeholder for actual content.",
  },
  {
    img: event2,
    title: "International",
    content:
      "The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today, it served as a placeholder for actual content.",
  },
  {
    img: event3,
    title: "National",
    content:
      "The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today, it served as a placeholder for actual content.",
  },
];

const upcomingEvents = [
  {
    date: "09 SEP, 2025",
    title: "52nd National Management Convention",
    location: "Hotel Taj Palace, New Delhi",
  },
  {
    date: "18 SEP, 2025",
    title: "Capacity Building Programme for Doctoral Educators",
    location: "New Delhi",
  },
  {
    date: "24 SEP, 2025",
    title: "Leadership Development Programme for Vice Chancellors",
    location: "New Delhi",
  },
  {
    date: "25 SEP, 2025",
    title:
      "Training Programme on Behavioural Skills For Executive Assistants/ Secretaries",
    location: "Hotel Taj Palace, New Delhi",
  },
];

const EventsSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Top Event Cards Section */}
      <div className="relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-black rounded-tr-[150px] sm:rounded-tr-[200px]"
          style={{
            backgroundImage: `url(${eventBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "600px",
            width: "100%",
          }}
        >
          <div className="absolute inset-0 bg-black/70 rounded-tr-[150px] sm:rounded-tr-[200px]"></div>
        </div>

        {/* Title */}
        <div className="relative z-10 text-center top-20 sm:pt-24">
          <h2 className="text-white text-base sm:text-xl font-bold uppercase leading-relaxed mb-3 font-dmsans tracking-wider">
            Bringing People Together
          </h2>
          <h2 className="text-4xl sm:text-[64px] font-bold text-white font-bower">
            Events
          </h2>
        </div>

        {/* Event Cards */}
        <div
          className="relative z-999 pb-0 sm:pb-20 top-40 sm:top-70 bg-[#F1F5FC];
"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6">
            {events.map((event, index) => (
              <div
                key={index}
                className=" rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-[#F1F5FC]"
              >
                <div className="bg-[#F1F5FC]">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-72 object-cover p-2 bg-[#F1F5FC] rounded-2xl"
                  />
                </div>
                <div className="p-5">
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

      {/* Upcoming Events Section */}
      <div className="relative py-20 mb-8 h-auto top-[150px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Background Image */}
          <div className="relative rounded-3xl overflow-hidden mb-10 h-auto py-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${upcomingEvent})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
              }}
            ></div>
            <div className="absolute inset-0 bg-gray-900/70"></div>
            {/* Title */}
            <div className="relative z-10 text-center pt-12 pb-8">
              {" "}
              {/* ⬅ changed: replaced py-16 with smaller spacing */}
              <h2 className="text-2xl md:text-4xl font-medium text-white mb-18 font-dmsans">
                Upcoming Events...
              </h2>
            </div>
            {/* Upcoming Events Cards */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 pb-10">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-5"
                >
                  <div className="flex items-start justify-between mb-3 ">
                    <div className="bg-[#0056A2] text-white text-sm font-semibold px-3 py-1 rounded-md cursor-pointer">
                      {event.date}
                    </div>
                    <ChevronRight
                      size={16}
                      className="text-[0056A2] shrink-0"
                    />
                  </div>
                  <h3 className="text-sm font-semibold font-dmsans text-black mb-2 leading-snug">
                    {event.title}
                  </h3>
                  <div className="flex items-start text-black text-[10px] font-normal mt-auto">
                    <MapPin size={12} className="mr-1 mt-0.5 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
