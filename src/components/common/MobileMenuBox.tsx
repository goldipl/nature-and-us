import React, { useState, MouseEvent } from "react";
import mobileMenyChevronDownIcon from "./../../../public/icons/common/mobile_menu/mobile-menu-chevron-down.svg";
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
          <span>OIPIP w Łodzi</span>
          <div
            className={`arrow-img ${
              outerShow[0] ? "rotate-up" : "rotate-down"
            }`}
          >
            <img
              src={mobileMenyChevronDownIcon.src}
              alt="Strzałka"
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
              <span>Władze</span>
              <div
                className={`arrow-img ${
                  innerShow[0][0] ? "rotate-up" : "rotate-down"
                }`}
              >
                <img
                  src={mobileMenyChevronDownIcon.src}
                  alt="Strzałka"
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
                  ORPiP
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  OSPiP
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  OKR
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  OROZ
                </Link>
              </div>
            </div>
          </div>

          <div className="inner-wrapper">
            <div className="title-img-box">
              <Link className="mobile-menu-link" href="">
                Komisje i zespoły
              </Link>
            </div>
          </div>

          <div className="inner-wrapper">
            <div className="title-img-box" onClick={handleInnerClick(0, 1)}>
              <span>Harmonogramy posiedzeń</span>
              <div
                className={`arrow-img ${
                  innerShow[0][1] ? "rotate-up" : "rotate-down"
                }`}
              >
                <img
                  src={mobileMenyChevronDownIcon.src}
                  alt="Strzałka"
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
                  ORPiP
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  PORPiP
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Pełnomocnicy
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Kadra Kierownicza
                </Link>
              </div>
            </div>
          </div>

          <div className="inner-wrapper">
            <div className="title-img-box" onClick={handleInnerClick(0, 2)}>
              <span>Rejestr</span>
              <div
                className={`arrow-img ${
                  innerShow[0][2] ? "rotate-up" : "rotate-down"
                }`}
              >
                <img
                  src={mobileMenyChevronDownIcon.src}
                  alt="Strzałka"
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
                  Praktyki Zawodowe
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Prawo Wykonywania Zawodu
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Akty Prawne
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Pytania i odpowiedzi
                </Link>
              </div>
            </div>
          </div>

          <div className="inner-wrapper">
            <div className="title-img-box" onClick={handleInnerClick(0, 3)}>
              <span>Sprawy finansowe</span>
              <div
                className={`arrow-img ${
                  innerShow[0][3] ? "rotate-up" : "rotate-down"
                }`}
              >
                <img
                  src={mobileMenyChevronDownIcon.src}
                  alt="Strzałka"
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
                  Składki
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Dofinansowania
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Zapomogi
                </Link>
              </div>
            </div>
          </div>

          <div className="inner-wrapper">
            <div className="title-img-box" onClick={handleInnerClick(0, 4)}>
              <span>KSZTAŁCENIE PODYPLOMOWE</span>
              <div
                className={`arrow-img ${
                  innerShow[0][4] ? "rotate-up" : "rotate-down"
                }`}
              >
                <img
                  src={mobileMenyChevronDownIcon.src}
                  alt="Strzałka"
                  width={12}
                  height={7}
                />
              </div>
            </div>
            <div
              className={`mobile-menu-box__el--inner__second ${
                innerShow[0][4] ? "show" : ""
              }`}
            >
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Rekrutacja
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Szkolenia specjalizacyjne
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Kursy kwalifikacyjne
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Kursy specjalistyczne
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Listy osób zainteresowanych
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Plan szkoleń OIPiP
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Rejestr podmiotów
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  SMK
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Pytania i odpowiedzi
                </Link>
              </div>
            </div>
          </div>

          <div className="inner-wrapper">
            <div className="title-img-box" onClick={handleInnerClick(0, 5)}>
              <span>Prawo</span>
              <div
                className={`arrow-img ${
                  innerShow[0][5] ? "rotate-up" : "rotate-down"
                }`}
              >
                <img
                  src={mobileMenyChevronDownIcon.src}
                  alt="Strzałka"
                  width={12}
                  height={7}
                />
              </div>
            </div>
            <div
              className={`mobile-menu-box__el--inner__second ${
                innerShow[0][5] ? "show" : ""
              }`}
            >
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Prawa i obowiązki członka samorządu
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Obowiązujące akty prawne
                </Link>
              </div>
            </div>
          </div>

          <div className="inner-wrapper">
            <div className="title-img-box" onClick={handleInnerClick(0, 6)}>
              <span>Biblioteka</span>
              <div
                className={`arrow-img ${
                  innerShow[0][6] ? "rotate-up" : "rotate-down"
                }`}
              >
                <img
                  src={mobileMenyChevronDownIcon.src}
                  alt="Strzałka"
                  width={12}
                  height={7}
                />
              </div>
            </div>
            <div
              className={`mobile-menu-box__el--inner__second ${
                innerShow[0][6] ? "show" : ""
              }`}
            >
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Regulamin korzystania z zasobów
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  Księgozbiór
                </Link>
              </div>
              <div className="inner-second__el">
                <Link className="mobile-menu-link" href="">
                  IBUK libra
                </Link>
              </div>
            </div>
          </div>

          <div className="inner-wrapper">
            <div className="title-img-box">
              <Link className="mobile-menu-link" href="">
                OŚRODEK INFORMACYJNO-EDUKACYJNY
              </Link>
            </div>
          </div>

          <div className="inner-wrapper">
            <div className="title-img-box">
              <Link className="mobile-menu-link" href="">
                SIEDZIBA OIPIP
              </Link>
            </div>
          </div>

          <div className="inner-wrapper">
            <div className="title-img-box">
              <Link className="mobile-menu-link" href="">
                PLIKI DO POBRANIA
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu-box__el" onClick={handleOuterClick(1)}>
        <div className="title-img-box">
          <span>Aktualności</span>
          <div
            className={`arrow-img ${
              outerShow[1] ? "rotate-up" : "rotate-down"
            }`}
          >
            <img
              src={mobileMenyChevronDownIcon.src}
              alt="Strzałka"
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
                KOMUNIKATY
              </Link>
            </div>
          </div>
          <div className="inner-wrapper">
            <div className="title-img-box">
              <Link className="mobile-menu-link" href="">
                KONFERENCJE I SPOTKANIA
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu-box__el">
        <div className="title-img-box">
          <Link className="mobile-menu-link" href="">
            <span>Agencja pośrednictwa pracy</span>
          </Link>
        </div>
      </div>

      <div className="mobile-menu-box__el" onClick={handleOuterClick(2)}>
        <div className="title-img-box">
          <span>System monitorowania kształcenia</span>
          <div
            className={`arrow-img ${
              outerShow[2] ? "rotate-up" : "rotate-down"
            }`}
          >
            <img
              src={mobileMenyChevronDownIcon.src}
              alt="Strzałka"
              width={12}
              height={7}
            />
          </div>
        </div>
        <div
          className={`mobile-menu-box__el--inner ${outerShow[2] ? "show" : ""}`}
        >
          <div className="inner-wrapper">
            <div className="title-img-box">
              <Link className="mobile-menu-link" href="">
                ZAKŁADANIE KONTA
              </Link>
            </div>
          </div>
          <div className="inner-wrapper">
            <div className="title-img-box">
              <Link className="mobile-menu-link" href="">
                WNIOSEK O MODYFIKACJĘ UPRAWNIEŃ I NADAWANIE ROLI
              </Link>
            </div>
          </div>
          <div className="inner-wrapper">
            <div className="title-img-box">
              <Link className="mobile-menu-link" href="">
                WNIOSEK NA SZKOLENIE
              </Link>
            </div>
          </div>
          <div className="inner-wrapper">
            <div className="title-img-box">
              <Link className="mobile-menu-link" href="">
                WNIOSEK O NADANIE FUNKCJI KIEROWNIKA
              </Link>
            </div>
          </div>
          <div className="inner-wrapper">
            <div className="title-img-box">
              <Link className="mobile-menu-link" href="">
                PYTANIA I ODPOWIEDZI
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu-box__el">
        <div className="title-img-box">
          <Link className="mobile-menu-link" href="">
            <span>Biuletyn</span>
          </Link>
        </div>
      </div>

      <div className="mobile-menu-box__el">
        <div className="title-img-box">
          <Link className="mobile-menu-link" href="">
            <span>Kontakt</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuBox;
