import React, { useState } from "react";
import closeIcon from "./../../../public/icons/common/topbar/close.svg";

interface TopbarProps {
  onClose: () => void;
}

const Topbar = ({ onClose }: TopbarProps) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleClose = () => {
    setIsHidden(true);
    onClose();
  };

  return (
    <div id="topbar" className={`topbar ${isHidden ? "hidden" : ""}`}>
      <div className="topbar-wrapper">
        <p className="topbar-wrapper__text">
          <strong>Important Notice!</strong>
          <span className="text">
            Due to the extremely dry weather conditions, there is a high risk of
            fire in the forests. Please avoid any activities that could
            potentially start a fire, such as campfires or using fireworks.
            Report any signs of fire to the authorities immediately.
          </span>
          <span className="topbar-wrapper__close-icon" onClick={handleClose}>
            <img src={closeIcon.src} alt="Close" width={14} height={14} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Topbar;
