import React from "react";
import locationIcon from "./../../../public/icons/common/footer/location.svg";
import Accordion from "../global/Accordion";
import Link from "next/link";

const Footer = () => {
  const accordionLeftItems = [
    {
      title: "Forests",
      content: <p>This is the description for the Forests accordion item</p>,
    },
    {
      title: "Rivers",
      content: <p>This is the description for the Rivers accordion item</p>,
    },
    {
      title: "Mountains",
      content: <p>This is the description for the Mountains accordion item</p>,
    },
    {
      title: "Oceans",
      content: <p>This is the description for the Oceans accordion item</p>,
    },
    {
      title: "Deserts",
      content: <p>This is the description for the Deserts accordion item</p>,
    },
  ];

  const accordionRightItems = [
    {
      title: "Wildlife Conservation",
      content: (
        <p>
          This is the description for the Wildlife Conservation accordion item
        </p>
      ),
    },
    {
      title: "National Parks",
      content: (
        <p>This is the description for the National Parks accordion item</p>
      ),
    },
    {
      title: "Botanical Gardens",
      content: (
        <p>This is the description for the Botanical Gardens accordion item</p>
      ),
    },
    {
      title: "Environmental Protection",
      content: (
        <p>
          This is the description for the Environmental Protection accordion
          item
        </p>
      ),
    },
    {
      title: "Sustainable Practices",
      content: (
        <p>
          This is the description for the Sustainable Practices accordion item
        </p>
      ),
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-wrapper-top">
          <div className="footer-wrapper-top-left">
            <div className="contact-box">
              <h2>Contact Information</h2>
              <h3>Nature Office</h3>
              <div className="open-hours-box">
                <p>In July and August, the Nature office</p>
                <p>
                  is open on Tuesdays from: <strong>8:00-16:00</strong>
                </p>
                <p>Monday: no visitors day</p>
                <p>
                  Tuesday: <strong>10:00-18:00</strong>
                </p>
                <p>
                  Wednesday-Friday: <strong>8:00-16:00</strong>
                </p>
              </div>
              <div className="address-box">
                <p>Address: 123 Greenway, Forest City</p>
                <p>
                  <span>Phone:</span>
                  <Link className="tel-link" href="tel:123-456-7890">
                    (123) 456-7890
                  </Link>
                  ; fax 123-456-7891
                </p>
                <p>
                  <span>Website:</span>
                  <Link href="http://www.natureoffice.org">
                    http://www.natureoffice.org
                  </Link>
                </p>
                <p>
                  <span>Email:</span>
                  <Link href="mailto:info@natureoffice.org">
                    info@natureoffice.org
                  </Link>
                </p>
              </div>
              <div className="nip-box">
                <p>NIP 123 45 6789</p>
              </div>
            </div>
          </div>
          <div className="footer-wrapper-top-right">
            <div className="footer-contact-full">
              <strong>
                Information on the implementation of nature-related projects is
                provided during duty hours at the Nature office:
              </strong>
            </div>
            <div className="footer-contact-row">
              <div className="footer-contact-row__col">
                <p>Chairperson of Nature Council</p>
                <p>
                  <strong>John Doe </strong>
                  <span>Phone:</span>
                  <Link href="tel:987-654-3210">987-654-3210</Link>
                </p>
              </div>
              <div className="footer-contact-row__col">
                <p>Secretary of Nature Council</p>
                <p>
                  <strong>Jane Smith</strong>
                  <span>
                    {" "}
                    on the second and fourth Monday of the month from
                    15:00-17:00
                  </span>
                </p>
                <p>
                  <span>Email:</span>
                  <Link href="mailto:secretary@natureoffice.org">
                    secretary@natureoffice.org
                  </Link>
                  , <span>Phone:</span>
                  <Link href="tel:123-987-6543">(123) 987-6543</Link>
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
          <span>Nature & Us 2024 | All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
