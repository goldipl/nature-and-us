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
                <Link className="mobile-menu-link" href="">
                  Conservation Projects
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Forest Monitoring
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Wildlife Protection
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Community Engagement
                </Link>
              </div>
            </div>
          </div>

          <div className="inner-wrapper">
            <div className="title-img-box">
              <Link className="mobile-menu-link" href="">
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
                <Link className="mobile-menu-link" href="">
                  Ecological Studies
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Climate Impact
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Biodiversity Projects
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
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
                <Link className="mobile-menu-link" href="">
                  Workshops & Seminars
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  School Programs
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Public Lectures
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
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
                <Link className="mobile-menu-link" href="">
                  Publications
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Research Papers
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Guidelines
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
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
              <Link className="mobile-menu-link" href="">
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
              <Link className="mobile-menu-link" href="">
                Conferences & Meetings
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu-box__el">
        <div className="title-img-box">
          <Link className="mobile-menu-link" href="">
            <span>Locations</span>
          </Link>
        </div>
      </div>

      <div className="mobile-menu-box__el">
        <div className="title-img-box">
          <Link className="mobile-menu-link" href="">
            <span>Earth's climate</span>
          </Link>
        </div>
      </div>

      <div className="mobile-menu-box__el">
        <div className="title-img-box">
          <Link className="mobile-menu-link" href="">
            <span>Job Agency</span>
          </Link>
        </div>
      </div>

      <div className="mobile-menu-box__el">
        <div className="title-img-box">
          <Link className="mobile-menu-link" href="">
            <span>Bulletin</span>
          </Link>
        </div>
      </div>

      <div className="mobile-menu-box__el">
        <div className="title-img-box">
          <Link className="mobile-menu-link" href="">
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuBox;
