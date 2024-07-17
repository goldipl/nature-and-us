import React, { useState, useEffect } from "react";
import Link from "next/link";
import oipipLogo from "./../../../public/icons/common/header/logo.svg";
import whiteSearch from "./../../../public/icons/common/header/white-search.svg";
import individualIcon from "./../../../public/icons/common/header/individual-user.svg";
import groupIcon from "./../../../public/icons/common/header/group-users.svg";
import contrastIcon from "./../../../public/icons/common/header/contrast.svg";
import textIcon from "./../../../public/icons/common/header/Tt.svg";
import bipIcon from "./../../../public/icons/common/header/bip.svg";
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
                  src={oipipLogo.src}
                  alt="Okręgowa Izba Pielęgniarek i Położnych w Łodzi"
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
                    alt="Rozmiar tekstu"
                    width={26}
                    height={18}
                  />
                </div>
              </div>
              <div className="header-wrapper-top-right__contrast">
                <div className="icon" onClick={toggleContrastMode}>
                  <img
                    src={contrastIcon.src}
                    alt="Kontrast"
                    width={18}
                    height={18}
                  />
                </div>
              </div>
              <div className="header-wrapper-top-right__bip">
                <Link href="">
                  <img src={bipIcon.src} alt="bip" width={50} height={22} />
                </Link>
              </div>
              <div className="header-wrapper-top-right__buttons">
                <span className="buttons-text">System składek</span>
                <Link href="" className="group-btn">
                  <p>
                    <img
                      src={groupIcon.src}
                      alt="grupowy"
                      width={18}
                      height={14}
                    />
                    grupowy
                  </p>
                </Link>
                <Link href="" className="individual-btn">
                  <p>
                    <img
                      src={individualIcon.src}
                      alt="indywidualny"
                      width={10}
                      height={12}
                    />
                    indywidualny
                  </p>
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
                <p>OIPIP w Łodzi</p>
                <img
                  src={arrowNavIcon.src}
                  alt="strzałka"
                  width={15}
                  height={15}
                />
                <div className="header-nav-el-wrapper">
                  <div className="header-nav-el-wrapper__col">
                    <h3>
                      <Link href="">Władze</Link>
                    </h3>
                    <Link href="">ORPiP</Link>
                    <Link href="">OSPiP</Link>
                    <Link href="">OKR</Link>
                    <Link href="">OROZ</Link>
                    <h3>
                      <Link href="">Komisje i zespoły</Link>
                    </h3>
                    <h3>
                      <Link href="">Harmonogramy posiedzeń</Link>
                    </h3>
                    <Link href="">ORPiP</Link>
                    <Link href="">PORPiP</Link>
                    <Link href="">Pełnomocnicy</Link>
                    <Link href="">Kadra Kierownicza</Link>
                  </div>
                  <div className="header-nav-el-wrapper__col">
                    <h3>
                      <Link href="">Rejestr</Link>
                    </h3>
                    <Link href="">Praktyki Zawodowe</Link>
                    <Link href="">Prawo Wykonywania Zawodu</Link>
                    <Link href="">Akty Prawne</Link>
                    <Link href="">Pytania i odpowiedzi</Link>
                    <h3>
                      <Link href="">Sprawy finansowe</Link>
                    </h3>
                    <Link href="">Składki</Link>
                    <Link href="">Dofinansowania</Link>
                    <Link href="">Zapomogi</Link>
                  </div>
                  <div className="header-nav-el-wrapper__col">
                    <h3>
                      <Link href="">KSZTAŁCENIE PODYPLOMOWE</Link>
                    </h3>
                    <Link href="">Rekrutacja</Link>
                    <Link href="">Szkolenia specjalizacyjne</Link>
                    <Link href="">Kursy kwalifikacyjne</Link>
                    <Link href="">Kursy specjalistyczne</Link>
                    <Link href="">Listy osób zainteresowanych</Link>
                    <Link href="">Plan szkoleń OIPiP</Link>
                    <Link href="">Rejestr podmiotów</Link>
                    <Link href="">SMK</Link>
                    <Link href="">Pytania i odpowiedzi</Link>
                  </div>
                  <div className="header-nav-el-wrapper__col">
                    <h3>
                      <Link href="">PRAWO</Link>
                    </h3>
                    <Link href="">Prawa i obowiązki członka samorządu</Link>
                    <Link href="">Obowiązujące akty prawne</Link>
                    <h3>
                      <Link href="">BIBLIOTEKA</Link>
                    </h3>
                    <Link href="">Regulamin korzystania z zasobów</Link>
                    <Link href="">Księgozbiór</Link>
                    <Link href="">IBUK libra</Link>
                    <h3>
                      <Link href="">OŚRODEK INFORMACYJNO-EDUKACYJNY</Link>
                    </h3>
                    <h3>
                      <Link href="">SIEDZIBA OIPIP</Link>
                    </h3>
                    <h3>
                      <Link href="">PLIKI DO POBRANIA</Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className={`header-nav-el ${activeIndex === 1 ? "active" : ""}`}
                onClick={() => handleNavClick(1)}
              >
                <p>Aktualności</p>
                <img
                  src={arrowNavIcon.src}
                  alt="strzałka"
                  width={15}
                  height={15}
                />
                <div className="header-nav-el-wrapper">
                  <div className="header-nav-el-wrapper__col">
                    <h3>
                      <Link href="./news">KOMUNIKATY</Link>
                    </h3>
                  </div>
                  <div className="header-nav-el-wrapper__col">
                    <h3>
                      <Link href="">KONFERENCJE I SPOTKANIA</Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="header-nav-el only-link">
                <Link href="">Agencja pośrednictwa pracy</Link>
              </div>
              <div
                className={`header-nav-el ${activeIndex === 2 ? "active" : ""}`}
                onClick={() => handleNavClick(2)}
              >
                <p>System monitorowania kształcenia</p>

                <img
                  src={arrowNavIcon.src}
                  alt="strzałka"
                  width={15}
                  height={15}
                />
                <div className="header-nav-el-wrapper">
                  <div className="header-nav-el-wrapper__col">
                    <h3>
                      <Link href="">ZAKŁADANIE KONTA</Link>
                    </h3>
                    <h3>
                      <Link href="" className="short-header-link">
                        WNIOSEK O MODYFIKACJĘ UPRAWNIEŃ I NADAWANIE ROLI
                      </Link>
                    </h3>
                  </div>
                  <div className="header-nav-el-wrapper__col">
                    <h3>
                      <Link href="">WNIOSEK NA SZKOLENIE</Link>
                    </h3>
                    <h3>
                      <Link href="">WNIOSEK O NADANIE FUNKCJI KIEROWNIKA</Link>
                    </h3>
                  </div>
                  <div className="header-nav-el-wrapper__col">
                    <h3>
                      <Link href="">PYTANIA I ODPOWIEDZI</Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="header-nav-el only-link">
                <Link href="">Biuletyn</Link>
              </div>
              <div className="header-nav-el only-link">
                <Link href="">Kontakt</Link>
              </div>
            </nav>
            <form className="top-header__search-box">
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
                name="header-searchbox"
                id="header-searchbox"
                placeholder="Szukaj w serwisie"
              />
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default DesktopHeader;
