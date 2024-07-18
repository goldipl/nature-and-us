import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import newsSectionImg01 from "./../../../public/img/home/news_section/news-section01.jpg";
import newsSectionImg02 from "./../../../public/img/home/news_section/news-section02.jpg";
import newsSectionImg03 from "./../../../public/img/home/news_section/news-section03.jpg";
import newsSectionImg04 from "./../../../public/img/home/news_section/news-section04.jpg";
import Link from "next/link";

const NewsSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 760);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const newsItems = [
    {
      imgSrc: newsSectionImg01.src,
      date: "12.06.2024",
      label: "Poland",
      title: "The Healing Power of Forest Bathing",
      desc: "Discover how spending time in forests can boost your mental and physical well-being. Learn about the science behind forest bathing and its benefits.",
      more: "Read more ⇨",
    },
    {
      imgSrc: newsSectionImg02.src,
      date: "11.01.2024",
      label: "Wildlife",
      title: "Protecting Our Forests: A Global Initiative",
      desc: "",
      more: "",
    },
    {
      imgSrc: newsSectionImg03.src,
      date: "22.05.2024",
      label: "Forests news",
      title: "The Role of Forests in Combating Climate Change",
      desc: "",
      more: "",
    },
    {
      imgSrc: newsSectionImg04.src,
      date: "10.02.2024",
      label: "Forests habitats",
      title: "Wildlife Conservation in Forest Habitats",
      desc: "",
      more: "",
    },
  ];

  const renderNewsItems = () => {
    return newsItems.map((item, index) => (
      <Link href="" key={index} className="news-section-wrapper-slot">
        <div className="news-section-wrapper-slot__img">
          <img src={item.imgSrc} alt="artykul" width={640} height={640} />
        </div>
        <div className="news-section-wrapper-slot__text">
          <div className="date-label-box">
            <div className="news-section-wrapper-slot__text--date">
              <p>{item.date}</p>
            </div>
            {item.label && (
              <div className="news-section-wrapper-slot__text--label">
                <p>{item.label}</p>
              </div>
            )}
          </div>
          <div className="news-section-wrapper-slot__text--title">
            <h2>{item.title}</h2>
          </div>
          {item.desc && (
            <div className="news-section-wrapper-slot__text--desc">
              <p>{item.desc}</p>
            </div>
          )}
          {item.more && (
            <div className="news-section-wrapper-slot__text--more">
              <span>{item.more}</span>
            </div>
          )}
        </div>
      </Link>
    ));
  };

  return (
    <section id="news-section" className="news-section">
      <div className="news-section-wrapper">
        {isMobile ? (
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
          >
            {newsItems.map((item, index) => (
              <SwiperSlide key={index}>
                <Link href="" className="news-section-wrapper-slot">
                  <div className="news-section-wrapper-slot__img">
                    <img
                      src={item.imgSrc}
                      alt="artykul"
                      width={640}
                      height={640}
                    />
                  </div>
                  <div className="news-section-wrapper-slot__text">
                    <div className="date-label-box">
                      <div className="news-section-wrapper-slot__text--date">
                        <p>{item.date}</p>
                      </div>
                      {item.label && (
                        <div className="news-section-wrapper-slot__text--label">
                          <p>{item.label}</p>
                        </div>
                      )}
                    </div>
                    <div className="news-section-wrapper-slot__text--title">
                      <h2>{item.title}</h2>
                    </div>
                    {item.desc && (
                      <div className="news-section-wrapper-slot__text--desc">
                        <p>{item.desc}</p>
                      </div>
                    )}
                    {item.more && (
                      <div className="news-section-wrapper-slot__text--more">
                        <span>{item.more}</span>
                      </div>
                    )}
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          renderNewsItems()
        )}
      </div>
    </section>
  );
};

export default NewsSection;
