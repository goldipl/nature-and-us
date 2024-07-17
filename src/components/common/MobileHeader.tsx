import React, { useState, useEffect } from "react";
import Link from "next/link";
import mobileLogo from "./../../../public/icons/common/mobile_header/mobile-logo.svg";
import whiteSearch from "./../../../public/icons/common/header/white-search.svg";
import contrastIcon from "./../../../public/icons/common/header/contrast.svg";
import textIcon from "./../../../public/icons/common/header/Tt.svg";
import Hamburger from "./Hamburger";
import MobileMenuBox from "./MobileMenuBox";
import Topbar from "./Topbar";

const MobileHeader: React.FC = () => {
  const [isContributionsListOpen, setIsContributionsListOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [fontSizeIncreased, setFontSizeIncreased] = useState(false);
  const [originalFontSizes, setOriginalFontSizes] = useState<
    Map<Element, string>
  >(new Map());
  const [isContrastMode, setIsContrastMode] = useState(false);
  const [topbarHeight, setTopbarHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);

  useEffect(() => {
    // Function to update the heights and body padding
    const updateHeights = () => {
      const topbar = document.querySelector("#topbar.topbar") as HTMLElement;
      const header = document.querySelector(".mobile-header") as HTMLElement;
      if (topbar && header) {
        const topbarHeight = topbar.offsetHeight;
        const headerHeight = header.offsetHeight;
        setTopbarHeight(topbarHeight);
        setHeaderHeight(headerHeight);
        document.body.style.paddingTop = `${topbarHeight + headerHeight}px`;
      }
    };

    // Update heights on mount
    updateHeights();

    // Update heights if the window is resized
    window.addEventListener("resize", updateHeights);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", updateHeights);
    };
  }, []);

  useEffect(() => {
    // Adjust body padding when topbar visibility changes
    const header = document.querySelector(".mobile-header") as HTMLElement;
    if (isTopbarVisible) {
      document.body.style.paddingTop = `${topbarHeight + headerHeight}px`;
      if (header) {
        header.style.top = `${topbarHeight}px`;
      }
    } else {
      document.body.style.paddingTop = `${headerHeight}px`;
      if (header) {
        header.style.top = `0px`;
      }
    }
  }, [isTopbarVisible, topbarHeight, headerHeight]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
      const topbarHeight = document.querySelector(".topbar")?.clientHeight || 0;
      const MobileHeaderHeight =
        document.querySelector(".mobile-header")?.clientHeight || 0;
      document.documentElement.style.setProperty(
        "--mobile-menu-box-max-height",
        `calc(100dvh - ${topbarHeight + MobileHeaderHeight}px)`
      );
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMobileMenuOpen]);

  const toggleContrastMode = () => {
    setIsContrastMode((prevMode) => !prevMode);
    const root = document.documentElement;
    root.classList.toggle("contrast-mode");
  };

  const toggleContributionsList = () => {
    if (!isContributionsListOpen) {
      setIsMobileMenuOpen(false);
    }
    setIsContributionsListOpen(!isContributionsListOpen);
  };

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      setIsContributionsListOpen(false);
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResize = () => {
    if (!fontSizeIncreased) {
      const newOriginalFontSizes = new Map<Element, string>();

      document.querySelectorAll("*").forEach((element) => {
        if (element instanceof HTMLElement) {
          const computedStyle = window.getComputedStyle(element);
          const currentFontSize = computedStyle.fontSize;
          newOriginalFontSizes.set(element, currentFontSize);
          const newFontSize = parseFloat(currentFontSize) * 1.08;
          element.style.fontSize = `${newFontSize}px`;
        }
      });

      setOriginalFontSizes(newOriginalFontSizes);
    } else {
      originalFontSizes.forEach((fontSize, element) => {
        (element as HTMLElement).style.fontSize = fontSize;
      });
    }

    setFontSizeIncreased(!fontSizeIncreased);
  };

  useEffect(() => {
    return () => {
      // Cleanup to reset font sizes to original values on component unmount
      originalFontSizes.forEach((fontSize, element) => {
        (element as HTMLElement).style.fontSize = fontSize;
      });
    };
  }, []);

  const handleTopbarClose = () => {
    setIsTopbarVisible(false);
  };

  return (
    <div className="topbar-and-header">
      <Topbar onClose={handleTopbarClose} />
      <header
        className="mobile-header"
        style={{ top: isTopbarVisible ? `${topbarHeight}px` : "0px" }}
      >
        <div className="mobile-header-top">
          <div className="mobile-header-top__left">
            <Link href="./">
              <img
                src={mobileLogo.src}
                alt="Okręgowa Izba Pielęgniarek i Położnych w Łodzi"
                width={152}
                height={40}
              />
            </Link>
          </div>
          <div className="mobile-header-top__right">
            <Hamburger onClick={toggleMobileMenu} isOpen={isMobileMenuOpen} />
          </div>
        </div>
        <div className="mobile-header-search">
          <form className="search-box">
            <button type="submit">
              <img
                src={whiteSearch.src}
                alt="Szukaj"
                width="30"
                height="30"
              ></img>
            </button>
            <input
              type="text"
              name="mobile-header-searchbox"
              id="mobile-header-searchbox"
              placeholder="Search the site"
            />
          </form>
        </div>

        <div
          className={`health-contributions-list ${
            isContributionsListOpen ? "open" : ""
          }`}
        ></div>

        <div className={`mobile-menu ${isMobileMenuOpen ? "show" : ""} `}>
          <div className="mobile-menu-top">
            <div className="mobile-menu-top__left">
              <span>Przyciski dostępności</span>
            </div>
            <div className="mobile-menu-top__right">
              <div className="mobile-menu-top__right__text-sizes">
                <div className="icon" onClick={handleResize}>
                  <img
                    src={textIcon.src}
                    alt="Rozmiar tekstu"
                    width={26}
                    height={18}
                  />
                </div>
              </div>
              <div className="mobile-menu-top__right__contrast">
                <div className="icon" onClick={toggleContrastMode}>
                  <img
                    src={contrastIcon.src}
                    alt="Kontrast"
                    width={18}
                    height={18}
                  />
                </div>
              </div>
            </div>
          </div>
          <MobileMenuBox />
        </div>
      </header>
    </div>
  );
};

export default MobileHeader;
