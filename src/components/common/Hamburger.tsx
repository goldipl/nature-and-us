import React from "react";

interface HamburgerProps {
  onClick: () => void;
  isOpen: boolean;
}

const Hamburger: React.FC<HamburgerProps> = ({ onClick, isOpen }) => {
  return (
    <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={onClick}>
      <div className="line top"></div>
      <div className="line middle"></div>
      <div className="line bottom"></div>
    </div>
  );
};

export default Hamburger;
