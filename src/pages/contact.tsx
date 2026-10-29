import React, { useState, FormEvent } from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import { infoHref } from "@/data/infoPages";

const ContactPage = () => {
  const [isSent, setIsSent] = useState(false);
  const [senderName, setSenderName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // There is no backend yet, so we only confirm the message on screen
    const formData = new FormData(e.currentTarget);
    setSenderName(String(formData.get("name") || ""));
    setIsSent(true);
  };

  return (
    <>
      <Head>
        <title>Contact | Nature & Us</title>
      </Head>
      <main className="subpage contact-page">
        <div className="subpage-wrapper">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <header className="subpage-header">
            <h1>Contact</h1>
            <p>
              Questions about membership, courses, volunteering or our forests?
              Send us a message or visit the Nature Office.
            </p>
          </header>

          <div className="contact-row">
            <div className="contact-details">
              <h2>Nature Office</h2>
              <p>123 Greenway, Forest City</p>
              <p>
                Phone: <Link href="tel:123-456-7890">(123) 456-7890</Link>
              </p>
              <p>Fax: 123-456-7891</p>
              <p>
                Email:{" "}
                <Link href="mailto:info@natureoffice.org">
                  info@natureoffice.org
                </Link>
              </p>
              <h3>Opening hours</h3>
              <p>Monday: no visitors day</p>
              <p>
                Tuesday: <strong>10:00-18:00</strong>
              </p>
              <p>
                Wednesday-Friday: <strong>8:00-16:00</strong>
              </p>
              <p className="contact-details__note">
                In July and August the office is open on Tuesdays from
                8:00-16:00.
              </p>
              <Link
                href={infoHref("office-location")}
                className="button-primary"
              >
                How to find us
              </Link>
            </div>

            <div className="contact-form-box">
              {isSent ? (
                <div className="contact-success" role="status">
                  <h2>Thank you{senderName ? `, ${senderName}` : ""}!</h2>
                  <p>
                    Your message has been sent. We usually reply within two
                    working days.
                  </p>
                  <button
                    type="button"
                    className="button-primary"
                    onClick={() => setIsSent(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2>Send us a message</h2>
                  <label>
                    <span>Name</span>
                    <input type="text" name="name" required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input type="email" name="email" required />
                  </label>
                  <label>
                    <span>Topic</span>
                    <select name="topic" defaultValue="general">
                      <option value="general">General question</option>
                      <option value="membership">Membership</option>
                      <option value="volunteering">Volunteering</option>
                      <option value="education">Courses & education</option>
                      <option value="press">Press</option>
                    </select>
                  </label>
                  <label>
                    <span>Message</span>
                    <textarea name="message" rows={6} required />
                  </label>
                  <button type="submit" className="button-primary">
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
