import React, { useState, useEffect } from "react";
import Footer from "@/components/common/Footer";
import DesktopHeader from "@/components/common/DesktopHeader";
import NewsSection from "@/components/home/NewsSection";
import MobileHeader from "@/components/common/MobileHeader";
import "@/sass/main.scss";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      <main className="main-page">
        <NewsSection />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;