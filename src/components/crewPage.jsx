// Import crew images
import douglasCrew from "../assets/crew/image-douglas-hurley.png";
import markCrew from "../assets/crew/image-mark-shuttleworth.png";
import victorCrew from "../assets/crew/image-victor-glover.png";
import anoushehCrew from "../assets/crew/image-anousheh-ansari.png";
import { useState } from "react";

const crewData = [
  {
    name: "Douglas Hurley",
    image: douglasCrew,
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    id: 1,
  },
  {
    name: "Mark Shuttleworth",
    image: markCrew,
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    id: 2,
  },
  {
    name: "Victor Glover",
    image: victorCrew,
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    id: 3,
  },
  {
    name: "Anousheh Ansari",
    image: anoushehCrew,
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    id: 4,
  },
];

export default function Crew() {
  const [activeCrewMember, setActiveCrewMember] = useState(crewData[0]);

  function handleDotClick(e) {
    if (+e.target.id === activeCrewMember.id) return;
    else {
      setActiveCrewMember(() =>
        crewData.find((crew) => crew.id === +e.target.id)
      );
    }
  }

  return (
    <section>
      <div className="section-container crew">
        <CrewHeader />

        <CrewMemberImg activeCrewMember={activeCrewMember} />

        <DotsContainer
          activeCrewMember={activeCrewMember}
          handleDotClick={handleDotClick}
        />

        <CrewMemberDescription activeCrewMember={activeCrewMember} />
      </div>
    </section>
  );
}

function CrewHeader() {
  return (
    <header className="crew__header  ">
      <span className="xl:text-3xl">02</span>
      <p className="crew__header--title ">meet your crew</p>
    </header>
  );
}

function CrewMemberImg({ activeCrewMember }) {
  return (
    <div className="crew__img-box ">
      <img
        src={activeCrewMember.image}
        alt={activeCrewMember.name}
        className="crew__img"
      />
    </div>
  );
}

function DotsContainer({ activeCrewMember, handleDotClick }) {
  return (
    <div className=" flex items-center justify-center gap-5   lg:row-[3/4]">
      {crewData.map((crew) => (
        <Dot
          id={crew.id}
          activeCrewMember={activeCrewMember}
          handleDotClick={handleDotClick}
        />
      ))}
    </div>
  );
}

function Dot({ activeCrewMember, handleDotClick, id }) {
  return (
    <div
      className={`bg-white w-3 h-3 rounded-full cursor-pointer ${
        activeCrewMember.id === id ? "scale-110" : "opacity-30 scale-90"
      } duration-200`}
      id={id}
      onClick={(e) => handleDotClick(e)}
    />
  );
}

function CrewMemberDescription({ activeCrewMember }) {
  return (
    <div className="crew__member  ">
      <p className="crew__member--role ">{activeCrewMember.role}</p>
      <h3>{activeCrewMember.name}</h3>
      <p className="crew__member--bio ">{activeCrewMember.bio}</p>
    </div>
  );
}
