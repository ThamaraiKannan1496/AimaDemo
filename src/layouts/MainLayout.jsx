import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollButton from "./ScrollButton";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="">{children}</main>
      <ScrollButton />
      <Footer />
    </div>
  );
};

export default MainLayout;
