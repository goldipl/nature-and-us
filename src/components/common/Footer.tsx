import React from "react";
import Accordion from "../global/Accordion";
import Link from "next/link";

const Footer = () => {
  const accordionLeftItems = [
    {
      title: "Forests",
      content: (
        <p>
          Forests are vital for the health of our planet. They act as the lungs
          of the Earth, absorbing carbon dioxide and releasing oxygen. Forests
          are home to a diverse array of wildlife and provide resources such as
          timber, medicine, and food. They also play a crucial role in water
          cycle regulation and soil conservation.
        </p>
      ),
    },
    {
      title: "Rivers",
      content: (
        <p>
          Rivers are crucial waterways that sustain both human and ecological
          communities. They provide water for drinking, agriculture, and
          industry. Rivers also support a rich biodiversity, offering habitats
          for various species of fish, birds, and other wildlife. Additionally,
          rivers are important for recreation and cultural activities.
        </p>
      ),
    },
    {
      title: "Mountains",
      content: (
        <p>
          Mountains are majestic landforms that offer a range of ecological and
          cultural benefits. They provide habitats for unique flora and fauna
          and are sources of fresh water through glaciers and rivers. Mountains
          also attract tourists and adventure enthusiasts, contributing to local
          economies. Moreover, they hold cultural and spiritual significance for
          many communities around the world.
        </p>
      ),
    },
    {
      title: "Oceans",
      content: (
        <p>
          Oceans cover over 70% of the Earth's surface and are essential for
          global climate regulation. They absorb carbon dioxide and heat,
          playing a key role in mitigating climate change. Oceans are also rich
          in biodiversity, supporting marine life from tiny plankton to large
          whales. They provide food, transportation routes, and recreational
          opportunities for humans.
        </p>
      ),
    },
    {
      title: "Deserts",
      content: (
        <p>
          Deserts are unique ecosystems characterized by their arid conditions
          and sparse vegetation. Despite their harsh environment, deserts
          support a variety of life adapted to extreme conditions. Deserts are
          also important for their mineral resources and cultural heritage. They
          offer stunning landscapes and are popular destinations for tourism and
          scientific research.
        </p>
      ),
    },
  ];

  const accordionRightItems = [
    {
      title: "Wildlife Conservation",
      content: (
        <p>
          Wildlife conservation is the practice of protecting animal species and
          their habitats. It involves efforts to prevent species from becoming
          endangered or extinct. Conservation strategies include habitat
          preservation, anti-poaching measures, and breeding programs.
          Protecting wildlife ensures biodiversity and the health of ecosystems,
          which are vital for human survival.
        </p>
      ),
    },
    {
      title: "National Parks",
      content: (
        <p>
          National parks are protected areas established to conserve natural
          landscapes and wildlife. They provide spaces for recreation,
          education, and scientific research. National parks help preserve
          biodiversity, protect endangered species, and maintain ecological
          processes. They also offer opportunities for people to connect with
          nature and enjoy outdoor activities.
        </p>
      ),
    },
    {
      title: "Botanical Gardens",
      content: (
        <p>
          Botanical gardens are institutions dedicated to the collection,
          cultivation, and display of a wide variety of plants. They play a
          significant role in plant conservation, research, and education.
          Botanical gardens serve as living repositories of plant diversity,
          providing resources for scientific study and public enjoyment. They
          also promote awareness about the importance of plant conservation.
        </p>
      ),
    },
    {
      title: "Environmental Protection",
      content: (
        <p>
          Environmental protection involves measures taken to preserve and
          improve the natural environment. This includes reducing pollution,
          conserving natural resources, and protecting ecosystems. Environmental
          protection is essential for maintaining the health of the planet and
          ensuring sustainable development. It involves the cooperation of
          governments, organizations, and individuals.
        </p>
      ),
    },
    {
      title: "Sustainable Practices",
      content: (
        <p>
          Sustainable practices are methods of using resources in a way that
          meets current needs without compromising the ability of future
          generations to meet theirs. This includes practices such as reducing
          waste, using renewable energy, and promoting sustainable agriculture.
          Adopting sustainable practices helps protect the environment, conserve
          resources, and support long-term ecological balance.
        </p>
      ),
    },
  ];

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
            <div className="footer-accordions__col">
              <Accordion items={accordionRightItems} />
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
