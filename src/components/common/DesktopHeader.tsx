import React, { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Close the dropdown menu after navigating to another page
    setActiveIndex(null);
  }, [router.asPath]);

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

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push({ pathname: "/search", query: { q: searchQuery.trim() } });
  };

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
                <Link
                  href={{ pathname: "/articles", query: { region: "local" } }}
                  className="header-btn"
                >
                  <p>Local</p>
                </Link>
                <Link
                  href={{ pathname: "/articles", query: { region: "national" } }}
                  className="header-btn"
                >
                  <p>National</p>
                </Link>
                <Link
                  href={{ pathname: "/articles", query: { region: "global" } }}
                  className="header-btn"
                >
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
                      <Link href="/info/management">Management</Link>
                    </h3>
                    <Link href="/info/forestry-team">Forestry Team</Link>
                    <Link href="/info/volunteers">Volunteers</Link>
                    <Link href="/info/conservation-projects">Conservation Projects</Link>
                    <Link href="/info/research-initiatives">Research Initiatives</Link>
                    <h3>
                      <Link href="/info/committees">Committees</Link>
                    </h3>
                    <h3>
                      <Link href="/info/meeting-schedules">Meeting Schedules</Link>
                    </h3>
                    <Link href="/info/advisory-board">Advisory Board</Link>
                    <Link href="/info/partners">Partners</Link>
                    <Link href="/info/key-personnel">Key Personnel</Link>
                  </div>
                  <div className="header-nav-el-wrapper__col">
                    <h3>
                      <Link href="/info/register">Register</Link>
                    </h3>
                    <Link href="/info/membership">Membership</Link>
                    <Link href="/info/professional-conduct">Professional Conduct</Link>
                    <Link href="/info/legal-documents">Legal Documents</Link>
                    <Link href="/info/faqs">FAQs</Link>
                    <h3>
                      <Link href="/info/financial-matters">Financial Matters</Link>
                    </h3>
                    <Link href="/info/membership-fees">Membership Fees</Link>
                    <Link href="/info/grants">Grants</Link>
                    <Link href="/info/aid">Aid</Link>
                  </div>
                  <div className="header-nav-el-wrapper__col">
                    <h3>
                      <Link href="/info/postgraduate-education">POSTGRADUATE EDUCATION</Link>
                    </h3>
                    <Link href="/info/recruitment">Recruitment</Link>
                    <Link href="/info/specialization-courses">Specialization Courses</Link>
                    <Link href="/info/qualification-courses">Qualification Courses</Link>
                    <Link href="/info/specialist-courses">Specialist Courses</Link>
                    <Link href="/info/interested-individuals">Interested Individuals</Link>
                    <Link href="/info/training-plans">Training Plans</Link>
                    <Link href="/info/registered-entities">Registered Entities</Link>
                    <Link href="/info/smk">SMK</Link>
                    <Link href="/info/postgraduate-faqs">FAQs</Link>
                  </div>
                  <div className="header-nav-el-wrapper__col">
                    <h3>
                      <Link href="/info/law">LAW</Link>
                    </h3>
                    <Link href="/info/rights-and-obligations">Rights and Obligations</Link>
                    <Link href="/info/current-legal-acts">Current Legal Acts</Link>
                    <h3>
                      <Link href="/info/library">LIBRARY</Link>
                    </h3>
                    <Link href="/info/usage-regulations">Usage Regulations</Link>
                    <Link href="/info/book-collection">Book Collection</Link>
                    <Link href="/info/ibuk-libra">IBUK Libra</Link>
                    <h3>
                      <Link href="/info/information-and-education-center">INFORMATION & EDUCATION CENTER</Link>
                    </h3>
                    <h3>
                      <Link href="/info/office-location">OFFICE LOCATION</Link>
                    </h3>
                    <h3>
                      <Link href="/info/downloadable-files">DOWNLOADABLE FILES</Link>
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
                      <Link href="/info/announcements">Announcements</Link>
                    </h3>
                  </div>
                  <div className="header-nav-el-wrapper__col">
                    <h3>
                      <Link href="/info/conferences-and-meetings">Conferences & Meetings</Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="header-nav-el only-link">
                <Link href="/info/locations">Locations</Link>
              </div>
              <div className="header-nav-el only-link">
                <Link href="/info/earths-climate">Earth's climate</Link>
              </div>
              <div className="header-nav-el only-link">
                <Link href="/info/job-agency">Job Agency</Link>
              </div>
              <div className="header-nav-el only-link">
                <Link href="/info/bulletin">Bulletin</Link>
              </div>
              <div className="header-nav-el only-link">
                <Link href="/contact">Contact</Link>
              </div>
            </nav>
            <form className="top-header__search-box" onSubmit={handleSearch}>
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default DesktopHeader;
