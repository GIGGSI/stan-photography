import React, { useState } from "react";
import "./Chevron.css";

const Chevron = () => {
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);
  const addChevron = () => {
    if (window.scrollY >= 100) {
      setShowBackToTopButton(true);
    } else {
      setShowBackToTopButton(false);
    }
  };
  window.addEventListener("scroll", addChevron);

  if (showBackToTopButton) {
    return (
      <div
        className={"chevronUp descktop-chevronUp"}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      ></div>
    );
  }
  if (!showBackToTopButton) {
    return null;
  }
};

export default Chevron;
