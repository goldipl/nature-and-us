import React, { useState } from "react";
import closeIcon from "./../../../public/icons/common/topbar/close.svg";

interface TopbarProps {
  onClose: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onClose }) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleClose = () => {
    setIsHidden(true);
    onClose();
  };

  return (
    <div id="topbar" className={`topbar ${isHidden ? "hidden" : ""}`}>
      <div className="topbar-wrapper">
        <p className="topbar-wrapper__text">
          <strong>Ważny komunikat!</strong>
          <span className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
            nibh ante. Nam tincidunt urna eget nulla.
          </span>
          <span className="topbar-wrapper__close-icon" onClick={handleClose}>
            <img src={closeIcon.src} alt="Zamknij" width={14} height={14} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Topbar;
