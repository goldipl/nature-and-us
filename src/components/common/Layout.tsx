import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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
      {children}
      <Footer />
    </>
  );
};

export default Layout;
