import "./style.css";

import { useState } from "react";
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

export default function App() {
  const [activePage, setActivePage] = useState("Home");
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });

  function handlePageNavigation(e) {
    e.preventDefault();
    const targetPage = e.target.getAttribute("href");
    if (targetPage === activePage) return;
    setActivePage(targetPage);
  }

  // Determine background image based on page and screen size
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
    <main style={mainStyle} className="h-screen">
      <Navigation
        activePage={activePage}
        handlePageNavigation={handlePageNavigation}
        isDesktopOrLaptop={isDesktopOrLaptop}
      />
      {activePage === "Home" && <Home />}
      {activePage === "Destination" && <Destination />}
      {activePage === "Crew" && <Crew />}
      {activePage === "Technology" && (
        <Technology isDesktopOrLaptop={isDesktopOrLaptop} />
      )}
    </main>
  );
}
