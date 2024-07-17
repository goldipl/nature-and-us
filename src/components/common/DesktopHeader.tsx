import React, { useState, useEffect } from "react";
import Link from "next/link";
import forestLogo from "./../../../public/icons/common/header/logo.svg";
import whiteSearch from "./../../../public/icons/common/header/white-search.svg";
import contrastIcon from "./../../../public/icons/common/header/contrast.svg";
import textIcon from "./../../../public/icons/common/header/Tt.svg";
import arrowNavIcon from "./../../../public/icons/common/header/chevron-down.svg";
import Topbar from "./Topbar";

const DesktopHeader: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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
      const header = document.querySelector(".header") as HTMLElement;
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
    const header = document.querySelector(".header") as HTMLElement;
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

  const toggleContrastMode = () => {
    setIsContrastMode((prevMode) => !prevMode);
    const root = document.documentElement;
    root.classList.toggle("contrast-mode");
  };

  const handleNavClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
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
      <header className="header" style={{ top: `${topbarHeight}px` }}>
        <div className="header-wrapper">
          <div className="header-wrapper-top">
            <div className="header-wrapper-top__logo">
              <Link href="/">
                <img
                  src={forestLogo.src}
                  alt="Forest and Nature Organization"
                  width={508}
                  height={68}
                />
              </Link>
            </div>
            <div className="header-wrapper-top-right">
              <div className="header-wrapper-top-right__text-sizes">
                <div className="icon" onClick={handleResize}>
                  <img
                    src={textIcon.src}
                    alt="Text Size"
                    width={26}
                    height={18}
                  />
                </div>
              </div>
              <div className="header-wrapper-top-right__contrast">
                <div className="icon" onClick={toggleContrastMode}>
                  <img
                    src={contrastIcon.src}
                    alt="Contrast"
                    width={18}
                    height={18}
                  />
                </div>
              </div>
              <div className="header-wrapper-top-right__buttons">
                <span className="buttons-text">Nature News:</span>
                <Link href="" className="header-btn">
                  <p>Local</p>
                </Link>
                <Link href="" className="header-btn">
                  <p>National</p>
                </Link>
                <Link href="" className="header-btn">
                  <p>Global</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="header-wrapper-bottom">
            <nav className="header-nav">
              <div
                className={`header-nav-el ${activeIndex === 0 ? "active" : ""}`}
                onClick={() => handleNavClick(0)}
              >
                <p>Our Forests</p>
                <img
                  src={arrowNavIcon.src}
                  alt="arrow"
                  width={15}
                  height={15}
                />
                <div className="header-nav-el-wrapper">
                  <div className="header-nav-el-wrapper__col">
                    <h3>
                      <Link href="">Management</Link>
                    </h3>
                    <Link href="">Forestry Team</Link>
                    <Link href="">Volunteers</Link>
                    <Link href="">Conservation Projects</Link>
                    <Link href="">Research Initiatives</Link>
                    <h3>
                      <Link href="">Committees</Link>
                    </h3>
                    <h3>
                      <Link href="">Meeting Schedules</Link>
                    </h3>
                    <Link href="">Advisory Board</Link>
                    <Link href="">Partners</Link>
                    <Link href="">Key Personnel</Link>
                  </div>
                  <div className="header-nav-el-wrapper__col">
                    <h3>
                      <Link href="">Register</Link>
                    </h3>
                    <Link href="">Membership</Link>
                    <Link href="">Professional Conduct</Link>
                    <Link href="">Legal Documents</Link>
                    <Link href="">FAQs</Link>
                    <h3>
                      <Link href="">Financial Matters</Link>
                    </h3>
                    <Link href="">Membership Fees</Link>
                    <Link href="">Grants</Link>
                    <Link href="">Aid</Link>
                  </div>
                  <div className="header-nav-el-wrapper__col">
                    <h3>
                      <Link href="">POSTGRADUATE EDUCATION</Link>
                    </h3>
                    <Link href="">Recruitment</Link>
                    <Link href="">Specialization Courses</Link>
                    <Link href="">Qualification Courses</Link>
                    <Link href="">Specialist Courses</Link>
                    <Link href="">Interested Individuals</Link>
                    <Link href="">Training Plans</Link>
                    <Link href="">Registered Entities</Link>
                    <Link href="">SMK</Link>
                    <Link href="">FAQs</Link>
                  </div>
                  <div className="header-nav-el-wrapper__col">
                    <h3>
                      <Link href="">LAW</Link>
                    </h3>
                    <Link href="">Rights and Obligations</Link>
                    <Link href="">Current Legal Acts</Link>
                    <h3>
                      <Link href="">LIBRARY</Link>
                    </h3>
                    <Link href="">Usage Regulations</Link>
                    <Link href="">Book Collection</Link>
                    <Link href="">IBUK Libra</Link>
                    <h3>
                      <Link href="">INFORMATION & EDUCATION CENTER</Link>
                    </h3>
                    <h3>
                      <Link href="">OFFICE LOCATION</Link>
                    </h3>
                    <h3>
                      <Link href="">DOWNLOADABLE FILES</Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className={`header-nav-el ${activeIndex === 1 ? "active" : ""}`}
                onClick={() => handleNavClick(1)}
              >
                <p>Updates</p>
                <img
                  src={arrowNavIcon.src}
                  alt="arrow"
                  width={15}
                  height={15}
                />
                <div className="header-nav-el-wrapper">
                  <div className="header-nav-el-wrapper__col">
                    <h3>
                      <Link href="./news">Announcements</Link>
                    </h3>
                  </div>
                  <div className="header-nav-el-wrapper__col">
                    <h3>
                      <Link href="">Conferences & Meetings</Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="header-nav-el only-link">
                <Link href="">Job Agency</Link>
              </div>
              <div className="header-nav-el only-link">
                <Link href="">Bulletin</Link>
              </div>
              <div className="header-nav-el only-link">
                <Link href="">Contact</Link>
              </div>
            </nav>
            <form className="top-header__search-box">
              <button type="submit">
                <img
                  src={whiteSearch.src}
                  alt="Search"
                  width="30"
                  height="30"
                ></img>
              </button>
              <input
                type="text"
                name="header-searchbox"
                id="header-searchbox"
                placeholder="Search the site"
              />
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default DesktopHeader;
