import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, //  allow animation every time you scroll
      mirror: true, // animate when scrolling up as well
      disable: "phone", // enable on all devices
    });

    // Refresh AOS when component updates or new elements appear
    AOS.refresh();
  }, []);
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
