"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScrollVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {showButton && (
        <div>
          <button
            className="fixed bottom-4 right-4 z-50"
            onClick={handleScrollToTop}
          >
            <Image
              src="/scroll to top.svg"
              alt="revenir en haut"
              width={55}
              height={55}
              className=""
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default ScrollToTopButton;
