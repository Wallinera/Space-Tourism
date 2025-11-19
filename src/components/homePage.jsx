export default function Home() {
  return (
    <section>
      <div className="section-container hero  ">
        {/*Text Container*/}
        <HomeHeader />
        {/*Explore Button Container*/}
        <ExploreButton />
      </div>
    </section>
  );
}

function HomeHeader() {
  return (
    <header className="hero__header">
      <p className="hero__header--title">so, you want to travel to</p>
      <h1>space</h1>
      <p className="hero__header--text">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </header>
  );
}

function ExploreButton() {
  return <div className="hero__btn">Explore</div>;
}
