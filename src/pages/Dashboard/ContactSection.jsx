import React, { useState } from "react";

const ContactSection = () => {
  const [selectedOffice, setSelectedOffice] = useState("head");
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    areaOfInterest: "",
    email: "",
    contactNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <section className="bg-gray-50 py-16 lg:mt-[50px]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Add gap and divider */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 relative font-dmsans">
          {/* Left Section - Office Info */}
          <div className="lg:col-span-3 space-y-1 pr-8 text-sm sm:text-base text-black">
            <h2 className=" font-semibold mb-1">Management House</h2>
            <p>14, Institutional Area, Lodhi Road, New Delhi 110003, India</p>
            <br />
            <div>
              <h3 className="font-semibold mb-1">Telephone:</h3>
              <p>011 - 24645100 / 011 - 24617354 / 011 - 43128100</p>
            </div>

            {/* Radio Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
              <label className="flex items-center cursor-pointer text-black font-dmsans text-lg md:text-xl ">
                <input
                  type="radio"
                  name="officeType"
                  value="head"
                  checked={selectedOffice === "head"}
                  onChange={(e) => setSelectedOffice(e.target.value)}
                  className="w-4 h-4 border-black focus:ring-gray-900 ring-black"
                />
                <span className="ml-2">Head Office</span>
              </label>

              <label className="flex items-center cursor-pointer text-black font-dmsans text-lg md:text-xl">
                <input
                  type="radio"
                  name="officeType"
                  value="lma"
                  checked={selectedOffice === "lma"}
                  onChange={(e) => setSelectedOffice(e.target.value)}
                  className="w-4 h-4 border-black focus:ring-gray-900 ring-black"
                />
                <span className="ml-2 ">
                  Nearest Local Management Association (LMA)
                </span>
              </label>
            </div>

            {/* Map */}
            <div
              className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-sm mt-6"
              data-aos="fade-right"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0234520867826!2d77.21736931508076!3d28.59305248243406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sAll%20India%20Management%20Association!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AIMA Location Map"
              ></iframe>
            </div>
          </div>

          {/* Vertical Divider (visible only on large screens) */}
          <div className="hidden lg:block absolute left-[60%] top-0 bottom-0 w-[1px] bg-gray-900"></div>

          {/* Right Section - Form */}
          <div className="lg:col-span-2 rounded-lg px-6 mt-2 sm:mt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 font-bower uppercase">
              Contact Us
            </h2>

            <div className="space-y-6">
              {["name", "city", "areaOfInterest", "email", "contactNumber"].map(
                (field) => (
                  <input
                    key={field}
                    type={
                      field === "email"
                        ? "email"
                        : field === "contactNumber"
                        ? "tel"
                        : "text"
                    }
                    name={field}
                    placeholder={
                      field === "areaOfInterest"
                        ? "Area of Interest"
                        : field.charAt(0).toUpperCase() + field.slice(1)
                    }
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-sm border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 placeholder-gray-900"
                  />
                )
              )}

              <button
                onClick={handleSubmit}
                className="w-full bg-[#0056A2] text-white font-bold text-base py-2.5 rounded-md hover:bg-[#002a4f] transition-colors duration-300 cursor-pointer"
              >
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
