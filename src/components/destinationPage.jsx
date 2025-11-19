import { useState } from "react";

// Import destination images
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";

const destinationDescription = {
  moon: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
  regain perspective and come back refreshed. While you’re there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites.`,

  mars: `
  Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It’s two and a half times 
  the size of Everest!`,

  europa: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin.`,

  titan: `The only moon known to have a dense atmosphere other than Earth, Titan 
  is a home away from home (just a few hundred degrees colder!). As a 
  bonus, you get striking views of the Rings of Saturn.
`,
};

export default function Destination() {
  const [destination, setDestination] = useState("moon");

  function handleDestination(e) {
    e.preventDefault();
    const targetDestination = e.target.textContent.toLowerCase();
    if (targetDestination === destination) return;
    else {
      setDestination(targetDestination);
    }
  }

  return (
    <section>
      <div className="section-container destination ">
        <DestinationHeader />

        <DestinationContentBox>
          <DestinationImageBox destination={destination} />
          <DestinationContent
            destination={destination}
            handleDestination={handleDestination}
          ></DestinationContent>
        </DestinationContentBox>
      </div>
    </section>
  );
}

function DestinationHeader() {
  return (
    <header className="destination__header">
      <span>01</span>
      <p className="destination__header--title">pick your destination</p>
    </header>
  );
}

function DestinationContentBox({ children }) {
  return <div className="destination__content">{children}</div>;
}

function DestinationImageBox({ destination }) {
  return (
    <div>
      <img
        src={
          destination === "mars"
            ? mars
            : destination === "europa"
            ? europa
            : destination === "titan"
            ? titan
            : moon
        }
        alt="selected destination"
        className="w-40 mx-auto md:w-60 lg:w-80 xl:w-lg"
      />
    </div>
  );
}

function DestinationContent({ destination, handleDestination }) {
  return (
    <div className="destination__content--container ">
      <Destinations
        destination={destination}
        handleDestination={handleDestination}
      />
      <DestinationDescription destination={destination} />

      <DestinationDetails destination={destination} />
    </div>
  );
}

function Destinations({ destination, handleDestination }) {
  return (
    <div className="flex items-center justify-center gap-5 mb-5">
      {["moon", "mars", "europa", "titan"].map((targetDestination) => (
        <DescriptionLink
          key={targetDestination}
          targetDestination={targetDestination}
          destination={destination}
          handleDestination={handleDestination}
        />
      ))}
    </div>
  );
}

function DescriptionLink({
  destination,
  handleDestination,
  targetDestination,
}) {
  return (
    <div
      className={`destination border-b-2  ${
        destination === targetDestination ? "border-b-white" : "border-none"
      }`}
    >
      <a
        href="-"
        className={`destination__link ${
          destination === targetDestination ? "-translate-y-1" : ""
        }`}
        onClick={handleDestination}
      >
        {targetDestination.toUpperCase()}
      </a>
    </div>
  );
}

function DestinationDescription({ destination }) {
  return (
    <div className="destination__description  ">
      <h2>{destination.toUpperCase()}</h2>
      <p className="destination__description--text ">
        {destination === "moon"
          ? destinationDescription.moon
          : destination === "mars"
          ? destinationDescription.mars
          : destination === "europa"
          ? destinationDescription.europa
          : destinationDescription.titan}
      </p>
    </div>
  );
}

function DestinationDetails({ destination }) {
  return (
    <div className="destination__details ">
      <DestinationAVGDistance destination={destination} />
      <DestinationTravelTime destination={destination} />
    </div>
  );
}

function DestinationAVGDistance({ destination }) {
  return (
    <div className="destination__distance ">
      <p className="tracking-widest font-barlow font-thin   ">avg. distance</p>
      <p className="text-3xl font-bellefair">
        {destination === "moon"
          ? "384,400 km"
          : destination === "mars"
          ? "225 MIL. km"
          : destination === "europa"
          ? "628 MIL. KM"
          : "1.6 BIL. Km"}
      </p>
    </div>
  );
}

function DestinationTravelTime({ destination }) {
  return (
    <div className="destination__travel-time ">
      <p className=" tracking-widest font-barlow font-thin   ">
        est. travel time
      </p>
      <p className="text-3xl font-bellefair">
        {destination === "moon"
          ? "3 days"
          : destination === "mars"
          ? "9 months"
          : destination === "europa"
          ? "3 years"
          : "7 years"}
      </p>
    </div>
  );
}
