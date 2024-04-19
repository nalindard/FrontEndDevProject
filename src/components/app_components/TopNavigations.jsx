import { Link } from "react-router-dom";
import { useState } from "react";
import data from "/src/assets/data.json";

function TopNavigations() {
  const [navOpen, setNavOpen] = useState(false);

  const toogle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="relative flex w-full items-center justify-between bg-primary px-5 pb-[26px] pt-[14.89px] font-inter text-white" onClick={toogle}>
      {/* Logo */}
      <span>
        <Link to="/">
          <img loading="lazy" src="/images/White-Logo.webp" alt="logo" />
        </Link>
      </span>

      {/* Links */}
      <span
        className={`' fixed top-0 z-20 flex h-dvh w-full justify-between bg-white px-5 pt-4 text-black transition-all duration-300 md:absolute md:h-full md:w-auto md:bg-transparent md:pt-0 md:text-white ${navOpen ? "right-0" : "-right-full md:right-0"}`}
      >
        {/* Nav Links */}
        <span className="[line-height: 16.94px] flex flex-col gap-8 *:text-sm *:font-medium *:uppercase md:static md:flex-row md:items-center md:gap-x-7">
          {data?.navLinks.map((li) => (
            <Link key={li?.link} to={li?.link} className={`md:first:hidden`}>
              {li?.linkTitle}
            </Link>
          ))}
        </span>

        {/* Nav Close Button */}
        <span className="z-20 md:hidden" onClick={toogle}>
          <img className="w-[23px] h-[23px]" src="/images/hamburger-menu-close.webp" alt="" />
        </span>
      </span>

      {/* Nav Open Button */}
      <span
        className="absolute right-5 top-[26px] w-[31px] md:hidden"
        onClick={toogle}
      >
        <img src="/images/hamburger-menu.webp" alt="" />
      </span>
    </div>
  );
}

export default TopNavigations;
