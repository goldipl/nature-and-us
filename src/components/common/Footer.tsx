import React from "react";
import locationIcon from "./../../../public/icons/common/footer/location.svg";
import Accordion from "../global/Accordion";
import Link from "next/link";

const Footer = () => {
  const accordionLeftItems = [
    {
      title: "Biblioteka",
      content: <p>To jest miejsce na opis dla akordeonu o tytule Biblioteka</p>,
    },
    {
      title: "Rejestr",
      content: <p>To jest miejsce na opis dla akordeonu o tytule Rejestr</p>,
    },
    {
      title: "Kasa",
      content: <p>To jest miejsce na opis dla akordeonu o tytule Kasa</p>,
    },
    {
      title: "Pośrednictwo pracy",
      content: (
        <p>To jest miejsce na opis dla akordeonu o tytule Pośrednictwo pracy</p>
      ),
    },
    {
      title: "Szkolenia",
      content: <p>To jest miejsce na opis dla akordeonu o tytule Szkolenia</p>,
    },
  ];

  const accordionRightItems = [
    {
      title: "Okręgowy Rzecznik Odpowiedzialności Zawodowej",
      content: (
        <p>
          To jest miejsce na opis dla akordeonu o tytule Okręgowy Rzecznik
          Odpowiedzialności Zawodowej
        </p>
      ),
    },
    {
      title: "Okręgowy Sąd Pielęgniarek i Położnych",
      content: (
        <p>
          To jest miejsce na opis dla akordeonu o tytule Okręgowy Sąd
          Pielęgniarek i Położnych
        </p>
      ),
    },
    {
      title: "Redaktor Naczelna „Biuletynu”",
      content: (
        <p>
          To jest miejsce na opis dla akordeonu o tytule Redaktor Naczelna
          „Biuletynu”
        </p>
      ),
    },
    {
      title: "Prawnik",
      content: <p>To jest miejsce na opis dla akordeonu o tytule Prawnik</p>,
    },
    {
      title: "Dodatkowa zakładka",
      content: (
        <p>To jest miejsce na opis dla akordeonu o tytule Dodatkowa zakładka</p>
      ),
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-wrapper-top">
          <div className="footer-wrapper-top-left">
            <div className="contact-box">
              <h2>Dane kontaktowe</h2>
              <h3>Biuro OIPIP</h3>
              <div className="open-hours-box">
                <p>W miesiącach lipiec, sierpień biuro OIPiP</p>
                <p>
                  we wtorki czynne w godzinach: <strong>8:00-16:00</strong>
                </p>
                <p>poniedziałek: dzień bez interesantów</p>
                <p>
                  wtorek: <strong>10:00-18:00</strong>
                </p>
                <p>
                  środa-piątek: <strong>8:00-16:00</strong>
                </p>
              </div>
              <div className="address-box">
                <p>Adres: 91-762 Łódź, ul. Emilii Plater 34</p>
                <p>
                  <span>tel.</span>
                  <Link className="tel-link" href="tel:42 633 69 63">
                    (42) 633 69 63
                  </Link>
                  ; fax 633 68 74
                </p>
                <p>
                  <span>strona internetowa:</span>
                  <Link href="http://www.oipp.lodz.pl">
                    http://www.oipp.lodz.pl
                  </Link>
                </p>
                <p>
                  <span>e-mail:</span>
                  <Link href="mailto:biuro@oipp.lodz.pl">
                    biuro@oipp.lodz.pl
                  </Link>
                </p>
              </div>
              <div className="nip-box">
                <p>NIP 725 10 54 451</p>
              </div>
            </div>
            <div className="location-box">
              <Link
                target="_blank"
                href="https://www.google.com/maps/dir/Emilii+Plater+34,+91-762+%C5%81%C3%B3d%C5%BA/@51.7937349,19.3909525,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x41701919f12ba4db:0xe19d020efe5a8bc5!2m2!1d19.4733929!2d51.7937621?entry=ttu"
              >
                <img
                  src={locationIcon.src}
                  alt="Lokalizacja"
                  width={30}
                  height={40}
                />
                <span>Sprawdź wskazówki dojazdu</span>
              </Link>
            </div>
          </div>
          <div className="footer-wrapper-top-right">
            <div className="footer-contact-full">
              <strong>
                Informacji na temat realizacji zadań samorządu udzielają podczas
                dyżuru w biurze OIPiP:
              </strong>
            </div>
            <div className="footer-contact-row">
              <div className="footer-contact-row__col">
                <p>Przewodnicząca ORPiP</p>
                <p>
                  <strong>Anna Kacprzak </strong>
                  <span>tel.</span>
                  <Link href="tel:789 459 638">789 459 638</Link>
                </p>
              </div>
              <div className="footer-contact-row__col">
                <p>Sekretarz ORPiP</p>
                <p>
                  <strong>Halina Gmaj-Budziarek</strong>
                  <span> w II i IV poniedziałek miesiąca 15:00-17:00</span>
                </p>
                <p>
                  <span>e-mail:</span>
                  <Link href="mailto:sekretarz@oipp.lodz.pl">
                    sekretarz@oipp.lodz.pl
                  </Link>
                  , <span>tel.</span>
                  <Link href="tel:42 633 22 48">(42) 633 22 48</Link>
                </p>
              </div>
            </div>
            <div className="footer-accordions">
              <div className="footer-accordions__col">
                <Accordion items={accordionLeftItems} />
              </div>
              <div className="footer-accordions__col">
                <Accordion items={accordionRightItems} />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-wrapper-bottom">
          <span>Wszelkie prawa zastrzeżone</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
