import React from "react";
import Accordion from "../global/Accordion";
import Link from "next/link";
import { getInfoPagesBySection, infoHref } from "@/data/infoPages";

const Footer = () => {
  const accordionItems = getInfoPagesBySection("nature-topics").map(
    (page) => ({
      title: page.title,
      content: (
        <>
          <p>{page.intro}</p>
          <Link href={infoHref(page.slug)} className="accordion-link">
            Learn more ⇨
          </Link>
        </>
      ),
    })
  );
  const accordionLeftItems = accordionItems.slice(0, 5);
  const accordionRightItems = accordionItems.slice(5);

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-wrapper-top">
          <div className="footer-accordions">
            <div className="footer-accordions__col">
              <Accordion items={accordionLeftItems} />
            </div>
            <div className="footer-accordions__col contact-box-wrapper">
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
                  <p>
                    Address:
                    <Link href={infoHref("office-location")}>
                      123 Greenway, Forest City
                    </Link>
                  </p>
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
            <div className="footer-accordions__col">
              <Accordion items={accordionRightItems} />
            </div>
          </div>
        </div>
        <div className="footer-wrapper-bottom">
          <span>Nature & Us 2024 | All rights reserved</span>
          <nav className="footer-links">
            <Link href="/articles">Nature News</Link>
            <Link href={infoHref("legal-documents")}>Legal Documents</Link>
            <Link href={infoHref("faqs")}>FAQs</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
