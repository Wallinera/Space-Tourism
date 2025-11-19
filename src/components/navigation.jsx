import logo from "../assets/shared/logo.svg";
import hamburgerButton from "../assets/shared/icon-hamburger.svg";
import menuClose from "../assets/shared/icon-close.svg";
import { useState } from "react";

export default function Navigation({
  activePage,
  handlePageNavigation,
  isDesktopOrLaptop,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div
        className={`section-container  pb-0 ${activePage !== "Home" && "mb-0"}`}
      >
        {/*Mobile Menu */}
        {menuOpen && (
          <MobileMenu>
            {/*Mobile Links */}
            {["Home", "Destination", "Crew", "Technology"].map((page, i) => (
              <MobileMenuLink
                key={page}
                pageName={page}
                setMenuOpen={setMenuOpen}
                handlePageNavigation={handlePageNavigation}
                activePage={activePage}
              >
                {"0" + i + " " + page}
              </MobileMenuLink>
            ))}
          </MobileMenu>
        )}

        {/*Navigation Container */}
        <NavContainer>
          <Logo />
          <MobileMenuBtn setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
          <NavigationLinks
            activePage={activePage}
            handlePageNavigation={handlePageNavigation}
            isDesktopOrLaptop={isDesktopOrLaptop}
          />
        </NavContainer>
      </div>
    </nav>
  );
}

function MobileMenu({ children }) {
  return (
    <div className="mobile-menu fixed top-0 right-0 h-full w-1/2 bg-gray-900/80 backdrop-blur-lg z-50 flex flex-col items-start px-8 pt-24 gap-10 md:hidden">
      {children}
    </div>
  );
}

function MobileMenuLink({
  setMenuOpen,
  handlePageNavigation,
  activePage,
  children,
  pageName,
}) {
  return (
    <div
      className={`nav__link border-b  ${
        activePage === pageName ? "border-b-white" : "border-b-gray-900/0"
      }`}
    >
      <a
        href={pageName}
        className={`inline-block text-white font-barlow tracking-[4px] uppercase text-lg mb-3 cursor-pointer hover:opacity-70 duration-200 ${
          activePage === pageName ? "-translate-y-1" : ""
        }`}
        onClick={(e) => {
          handlePageNavigation(e);
          setMenuOpen(false);
        }}
      >
        {children}
      </a>
    </div>
  );
}

function NavContainer({ children }) {
  return <div className="nav__container ">{children}</div>;
}

function Logo() {
  return (
    <div>
      <img src={logo} alt="logo" className="scale-90 md:scale-75" />
    </div>
  );
}

function MobileMenuBtn({ setMenuOpen, menuOpen }) {
  return (
    <div
      className="cursor-pointer z-100 md:hidden"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <img src={menuOpen ? menuClose : hamburgerButton} alt="menu button" />
    </div>
  );
}

function NavigationLinks({
  activePage,
  handlePageNavigation,
  isDesktopOrLaptop,
}) {
  return (
    <div className="nav__links ">
      {/*Line Between Logo and Nav Links, visible only on large screens/}*/}
      <div
        className={`hidden absolute z-100 h-px w-85  ${
          activePage !== "Home" ? "bg-gray-500" : "bg-gray-800"
        } -left-75 top-11 lg:block xl:w-150 xl:-left-130 xxl:w-250 xxl:-left-235`}
      ></div>

      {/*Nav Link */}
      {["Home", "Destination", "Crew", "Technology"].map((page, i) => (
        <NavLink
          key={page}
          pageName={page}
          isDesktopOrLaptop={isDesktopOrLaptop}
          handlePageNavigation={handlePageNavigation}
          activePage={activePage}
        >
          {"0" + i + " " + page}
        </NavLink>
      ))}
    </div>
  );
}

function NavLink({
  children,
  pageName,
  isDesktopOrLaptop,
  handlePageNavigation,
  activePage,
}) {
  return (
    <div
      className={`border-b  ${
        activePage === pageName
          ? "border-b-white"
          : "border-b-gray-900 lg:border-b-gray-800/0"
      }`}
    >
      <a
        href={pageName}
        className={`nav__link  ${
          activePage === pageName ? "-translate-y-1" : ""
        }`}
        onClick={handlePageNavigation}
      >
        {isDesktopOrLaptop ? children : pageName}
      </a>
    </div>
  );
}
