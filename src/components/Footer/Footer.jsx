import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "../../assets/logo.png";
import footerImg from "../../assets/footerLogo.png";
import footerVid from "../../assets/footerSocial.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-6">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left Section - Logos + Socials + Links */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          {/* Logos (left column) */}
          <div className="shrink-0 space-y-10" data-aos="flip-right">
            <img src={logo} alt="AIMA Logo" className="w-36" />
            <img src={footerImg} alt="AIMO Logo" className="w-36  " />
          </div>

          {/* Icons + Links (right side beside logos) */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-6 lg:ml-6">
            {/* Social Icons */}
            <div className="flex gap-3 text-gray-300">
              <a href="#" className="hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin size={18} />
              </a>
              <a href="#" className="hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-white">
                <Youtube size={18} />
              </a>
            </div>

            {/* Footer Links */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2 text-xs font-dmsans text-white">
              <p className="cursor-pointer">MEDIA</p>
              <p className="cursor-pointer">EVENT CALENDAR</p>
              <p className="cursor-pointer">BLOG</p>
              <p className="cursor-pointer">CONTACT US</p>
            </div>
          </div>
        </div>

        {/* Center Section - Newsletter */}
        <div className="text-left">
          <h3 className="text-xl sm:text-3xl font-bold font-bower mb-3">
            Subscribe to newsletter
          </h3>
          <div className="flex flex-col items-center gap-y-3 font-dmsans">
            <input
              type="email"
              placeholder="Your E-mail"
              className="px-4 py-2 w-70 md:w-86 rounded-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-white placeholder:text-center placeholder:text-black"
            />
            <button className="cursor-pointer bg-[#0056A2] hover:bg-[#00305a] transition-colors px-5 py-2 w-70 md:w-86 rounded-sm font-bold text-sm">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>

        {/* Right Section - Facebook Embed */}
        <div
          className="flex justify-center lg:justify-end"
          data-aos="flip-left"
        >
          <img
            src={footerVid}
            alt="social"
            className="w-full max-h-[300px] object-contain"
          />
        </div>
      </div>

      {/* Bottom Bar - aligned with content */}
      <div className="max-w-7xl mx-auto px-6  pt-4 ">
        <div className="flex flex-col sm:flex-row justify-start items-center text-xs font-dmsans text-white gap-4">
          <p className="hover:text-gray-600 cursor-pointer ">PRIVACY POLICY</p>
          <p className="hover:text-gray-600 cursor-pointer">DISCLAIMER</p>
          <p className="text-[#5B6773]">©2025 AIMA INDIA.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
