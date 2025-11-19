import { useState } from "react";

// Import technology images
import launchVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import launchVehicleLandScape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import spaceportLandScape from "../assets/technology/image-spaceport-landscape.jpg";
import spaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceCapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";

const technologyData = [
  {
    name: "Launch vehicle",
    images: {
      portrait: launchVehiclePortrait,
      landscape: launchVehicleLandScape,
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    id: 1,
  },
  {
    name: "Spaceport",
    images: {
      portrait: spaceportPortrait,
      landscape: spaceportLandScape,
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    id: 2,
  },
  {
    name: "Space capsule",
    images: {
      portrait: spaceCapsulePortrait,
      landscape: spaceCapsuleLandscape,
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    id: 3,
  },
];

export default function Technology({ isDesktopOrLaptop }) {
  const [activeTechnology, setActiveTechnology] = useState(technologyData[0]);

  function handleButtonClick(e) {
    if (+e.target.id === activeTechnology.id) return;
    else {
      setActiveTechnology(() =>
        technologyData.find((tech) => tech.id === +e.target.id)
      );
    }
  }

  return (
    <section>
      <div className="section-container technology ">
        <TechnologyHeader />
        <TechnologyContentContainer>
          <ContentImg
            isDesktopOrLaptop={isDesktopOrLaptop}
            activeTechnology={activeTechnology}
          />
          <TechnologyContent>
            <TechnologyContentButtons
              activeTechnology={activeTechnology}
              handleButtonClick={handleButtonClick}
            />
            <TechnologyTextBox activeTechnology={activeTechnology} />
          </TechnologyContent>
        </TechnologyContentContainer>
      </div>
    </section>
  );
}

function TechnologyHeader() {
  return (
    <header className="technology__header">
      <span className="xl:text-3xl">03</span>
      <p className="technology__header--title  ">space launch 101</p>
    </header>
  );
}

function TechnologyContentContainer({ children }) {
  return <div className="technology__content--container ">{children}</div>;
}

function ContentImg({ activeTechnology, isDesktopOrLaptop }) {
  return (
    <div className="lg:order-1">
      <img
        src={
          isDesktopOrLaptop
            ? activeTechnology.images.portrait
            : activeTechnology.images.landscape
        }
        alt={activeTechnology.name}
        className="w-full"
      />
    </div>
  );
}

function TechnologyContent({ children }) {
  return <div className="technology__content--box ">{children}</div>;
}

function TechnologyContentButtons({ activeTechnology, handleButtonClick }) {
  return (
    <div className="technology__btns">
      {technologyData.map((tech) => (
        <TechnologyContentButton
          key={tech.id}
          id={tech.id}
          activeTechnology={activeTechnology}
          handleButtonClick={handleButtonClick}
        />
      ))}
    </div>
  );
}
function TechnologyContentButton({ activeTechnology, handleButtonClick, id }) {
  return (
    <div
      className={`technology__btn  ${
        activeTechnology.id === id
          ? "bg-white ring-white text-black"
          : "text-white "
      }`}
      id={id}
      onClick={(e) => handleButtonClick(e)}
    >
      {id}
    </div>
  );
}

function TechnologyTextBox({ activeTechnology }) {
  return (
    <div className="technology__text-box ">
      <p className="technology__text-box--title ">the terminology...</p>
      <h3>{activeTechnology.name}</h3>
      <p className="technology__text-box--description ">
        {activeTechnology.description}
      </p>
    </div>
  );
}
