import React from "react";
import "../styles/header.css";
import "../styles/mobile-nav.css";
import useDarkMode from "../utils/useDarkMode";
import useMobileNav from "../utils/useMobileNav";

const Header = () => {
  const { theme, toggleTheme } = useDarkMode();
  const { isMobileNavOpen, toggleMobileNav, mobileNavRef, headerBarsRef } =
    useMobileNav();

  return (
    <>
      <header className="header container">
        <nav>
          <ul className="header__menu">
            <li>
              <a className="header__link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="header__link" href="#featured">
                Work
              </a>
            </li>
            <li>
              <a className="header__link" href="#contact">
                Contact
              </a>
            </li>
            <li className="header__line"></li>
            <li>
              <button
                aria-label="theme-toggle btn"
                id="theme-toggle"
                className="header__sun"
                onClick={toggleTheme}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                </svg>
              </button>
            </li>
            <li>
              <a
                className="header__resume btn"
                href="https://dangpvo.github.io/Resume/DangVo_CV.pdf"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
          <button
            aria-label="mobile nav button"
            ref={headerBarsRef}
            className="header__bars"
            onClick={toggleMobileNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <div ref={mobileNavRef} className="mobile-nav">
        <nav>
          <ul className="mobile-nav__menu">
            <li>
              <a
                href="#about"
                className="mobile-nav__link"
                onClick={toggleMobileNav}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#featured"
                className="mobile-nav__link"
                onClick={toggleMobileNav}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="mobile-nav__link"
                onClick={toggleMobileNav}
              >
                Contact
              </a>
            </li>
            <li className="mobile-nav__link-line"></li>
            <li>
              <button
                aria-label="theme-toggle btn"
                id="theme-toggle"
                className="mobile-nav__sun"
                onClick={toggleTheme}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                </svg>
              </button>
            </li>
            <li>
              <a
                href="https://dangpvo.github.io/Resume/DangVo_CV.pdf"
                className="mobile-nav__btn btn"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
