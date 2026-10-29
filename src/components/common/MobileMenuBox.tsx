import React, { useState, MouseEvent } from "react";
import mobileMenuChevronDownIcon from "./../../../public/icons/common/mobile_menu/mobile-menu-chevron-down.svg";
import Link from "next/link";

const MobileMenuBox: React.FC = () => {
  const [outerShow, setOuterShow] = useState<boolean[]>([false, false]);
  const [innerShow, setInnerShow] = useState<boolean[][]>([[], []]);

  const handleOuterClick = (index: number) => (e: MouseEvent) => {
    setOuterShow((prev) => {
      const newOuterShow = [...prev];
      newOuterShow[index] = !newOuterShow[index];
      return newOuterShow;
    });
  };

  const handleInnerClick =
    (outerIndex: number, innerIndex: number) => (e: MouseEvent) => {
      e.stopPropagation();
      setInnerShow((prev) => {
        const newInnerShow = [...prev];
        newInnerShow[outerIndex][innerIndex] =
          !newInnerShow[outerIndex][innerIndex];
        return newInnerShow;
      });
    };

  return (
    <div className="mobile-menu-box">
      <div className="mobile-menu-box__el">
        <div className="title-img-box">
          <Link className="mobile-menu-link" href="/articles">
            <span>Nature News</span>
          </Link>
        </div>
      </div>

      <div className="mobile-menu-box__el" onClick={handleOuterClick(0)}>
        <div className="title-img-box">
          <span>Our Forests</span>
          <div
            className={`arrow-img ${
              outerShow[0] ? "rotate-up" : "rotate-down"
            }`}
          >
            <img
              src={mobileMenuChevronDownIcon.src}
              alt="Arrow"
              width={12}
              height={7}
            />
          </div>
        </div>
        <div
          className={`mobile-menu-box__el--inner ${outerShow[0] ? "show" : ""}`}
        >
          <div className="inner-wrapper">
            <div className="title-img-box" onClick={handleInnerClick(0, 0)}>
              <span>Forest Management</span>
              <div
                className={`arrow-img ${
                  innerShow[0][0] ? "rotate-up" : "rotate-down"
                }`}
              >
                <img
                  src={mobileMenuChevronDownIcon.src}
                  alt="Arrow"
                  width={12}
                  height={7}
                />
              </div>
            </div>
            <div
              className={`mobile-menu-box__el--inner__second ${
                innerShow[0][0] ? "show" : ""
              }`}
            >
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="/info/conservation-projects">
                  Conservation Projects
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="/info/forest-monitoring">
                  Forest Monitoring
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="/info/wildlife-protection">
                  Wildlife Protection
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="/info/community-engagement">
                  Community Engagement
                </Link>
              </div>
            </div>
          </div>

          <div className="inner-wrapper">
            <div className="title-img-box">
              <Link className="mobile-menu-link" href="/info/forestry-team">
                Forestry Team
              </Link>
            </div>
          </div>

          <div className="inner-wrapper">
            <div className="title-img-box" onClick={handleInnerClick(0, 1)}>
              <span>Research Initiatives</span>
              <div
                className={`arrow-img ${
                  innerShow[0][1] ? "rotate-up" : "rotate-down"
                }`}
              >
                <img
                  src={mobileMenuChevronDownIcon.src}
                  alt="Arrow"
                  width={12}
                  height={7}
                />
              </div>
            </div>
            <div
              className={`mobile-menu-box__el--inner__second ${
                innerShow[0][1] ? "show" : ""
              }`}
            >
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="/info/ecological-studies">
                  Ecological Studies
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="/info/climate-impact">
                  Climate Impact
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="/info/biodiversity-projects">
                  Biodiversity Projects
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="/info/sustainable-practices">
                  Sustainable Practices
                </Link>
              </div>
            </div>
          </div>

          <div className="inner-wrapper">
            <div className="title-img-box" onClick={handleInnerClick(0, 2)}>
              <span>Education & Outreach</span>
              <div
                className={`arrow-img ${
                  innerShow[0][2] ? "rotate-up" : "rotate-down"
                }`}
              >
                <img
                  src={mobileMenuChevronDownIcon.src}
                  alt="Arrow"
                  width={12}
                  height={7}
                />
              </div>
            </div>
            <div
              className={`mobile-menu-box__el--inner__second ${
                innerShow[0][2] ? "show" : ""
              }`}
            >
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="/info/workshops-and-seminars">
                  Workshops & Seminars
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="/info/school-programs">
                  School Programs
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="/info/public-lectures">
                  Public Lectures
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="/info/volunteer-opportunities">
                  Volunteer Opportunities
                </Link>
              </div>
            </div>
          </div>

          <div className="inner-wrapper">
            <div className="title-img-box" onClick={handleInnerClick(0, 3)}>
              <span>Resources</span>
              <div
                className={`arrow-img ${
                  innerShow[0][3] ? "rotate-up" : "rotate-down"
                }`}
              >
                <img
                  src={mobileMenuChevronDownIcon.src}
                  alt="Arrow"
                  width={12}
                  height={7}
                />
              </div>
            </div>
            <div
              className={`mobile-menu-box__el--inner__second ${
                innerShow[0][3] ? "show" : ""
              }`}
            >
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="/info/publications">
                  Publications
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="/info/research-papers">
                  Research Papers
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="/info/guidelines">
                  Guidelines
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="/info/faqs">
                  FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu-box__el" onClick={handleOuterClick(1)}>
        <div className="title-img-box">
          <span>Updates</span>
          <div
            className={`arrow-img ${
              outerShow[1] ? "rotate-up" : "rotate-down"
            }`}
          >
            <img
              src={mobileMenuChevronDownIcon.src}
              alt="Arrow"
              width={12}
              height={7}
            />
          </div>
        </div>
        <div
          className={`mobile-menu-box__el--inner ${outerShow[1] ? "show" : ""}`}
        >
          <div className="inner-wrapper">
            <div className="title-img-box">
              <Link className="mobile-menu-link" href="/info/announcements">
                Announcements
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`mobile-menu-box__el--inner ${outerShow[1] ? "show" : ""}`}
        >
          <div className="inner-wrapper">
            <div className="title-img-box">
              <Link className="mobile-menu-link" href="/info/conferences-and-meetings">
                Conferences & Meetings
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu-box__el">
        <div className="title-img-box">
          <Link className="mobile-menu-link" href="/info/locations">
            <span>Locations</span>
          </Link>
        </div>
      </div>

      <div className="mobile-menu-box__el">
        <div className="title-img-box">
          <Link className="mobile-menu-link" href="/info/earths-climate">
            <span>Earth's climate</span>
          </Link>
        </div>
      </div>

      <div className="mobile-menu-box__el">
        <div className="title-img-box">
          <Link className="mobile-menu-link" href="/info/job-agency">
            <span>Job Agency</span>
          </Link>
        </div>
      </div>

      <div className="mobile-menu-box__el">
        <div className="title-img-box">
          <Link className="mobile-menu-link" href="/info/bulletin">
            <span>Bulletin</span>
          </Link>
        </div>
      </div>

      <div className="mobile-menu-box__el">
        <div className="title-img-box">
          <Link className="mobile-menu-link" href="/contact">
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuBox;
