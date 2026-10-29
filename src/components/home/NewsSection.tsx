import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { Article } from "@/data/articles";
import NewsSlot from "./NewsSlot";

interface NewsSectionProps {
  items: Article[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ items }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 760);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            {items.map((item, index) => (
              <SwiperSlide key={item.slug}>
                <NewsSlot article={item} showExcerpt={index === 0} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          items.map((item, index) => (
            <NewsSlot key={item.slug} article={item} showExcerpt={index === 0} />
          ))
        )}
      </div>
    </section>
  );
};

export default NewsSection;
