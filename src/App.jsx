import "./style.css";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

// Import background images
import homeDesktop from "./assets/home/background-home-desktop.jpg";
import homeTablet from "./assets/home/background-home-tablet.jpg";
import homeMobile from "./assets/home/background-home-mobile.jpg";
import destinationDesktop from "./assets/destination/background-destination-desktop.jpg";
import destinationTablet from "./assets/destination/background-destination-tablet.jpg";
import destinationMobile from "./assets/destination/background-destination-mobile.jpg";
import crewDesktop from "./assets/crew/background-crew-desktop.jpg";
import crewTablet from "./assets/crew/background-crew-tablet.jpg";
import crewMobile from "./assets/crew/background-crew-mobile.jpg";
import technologyDesktop from "./assets/technology/background-technology-desktop.jpg";
import technologyTablet from "./assets/technology/background-technology-tablet.jpg";
import technologyMobile from "./assets/technology/background-technology-mobile.jpg";

// Import Components
import Navigation from "./components/navigation.jsx";
import Home from "./components/homePage.jsx";
import Destination from "./components/destinationPage.jsx";
import Crew from "./components/crewPage.jsx";
import Technology from "./components/technologyPage.jsx";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router";

export default function App() {
  // Determine background image based on page and screen size

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  // derive initial active page from the current path
  const [activePage, setActivePage] = useState(() => {
    const p = location.pathname.split("/")[1] || "home";
    return p.charAt(0).toUpperCase() + p.slice(1);
  });

  // keep activePage in sync with path changes
  useEffect(() => {
    const p = location.pathname.split("/")[1] || "home";
    setActivePage(p.charAt(0).toUpperCase() + p.slice(1));
  }, [location.pathname]);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });

  function getBackgroundImage() {
    const imageMap = {
      Home: { desktop: homeDesktop, tablet: homeTablet, mobile: homeMobile },
      Destination: {
        desktop: destinationDesktop,
        tablet: destinationTablet,
        mobile: destinationMobile,
      },
      Crew: { desktop: crewDesktop, tablet: crewTablet, mobile: crewMobile },
      Technology: {
        desktop: technologyDesktop,
        tablet: technologyTablet,
        mobile: technologyMobile,
      },
    };

    const images = imageMap[activePage];
    if (isDesktopOrLaptop) {
      return `url(${images.desktop})`;
    }
    if (isTablet) {
      return `url(${images.tablet})`;
    } else {
      return `url(${images.mobile})`;
    }
  }

  const mainStyle = {
    backgroundImage: getBackgroundImage(),
    backgroundSize: "cover",
    backgroundPosition: "bottom right",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <main
      style={mainStyle}
      className="min-h-screen max-h-full xl:h-screen text-white"
    >
      <Navigation
        activePage={activePage}
        isDesktopOrLaptop={isDesktopOrLaptop}
        setActivePage={setActivePage}
      />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route
          path="technology"
          element={<Technology isDesktopOrLaptop={isDesktopOrLaptop} />}
        />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </main>
  );
}
