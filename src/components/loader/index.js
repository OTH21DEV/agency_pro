import "./style.css";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useNavClick } from "../../app";
import { useHomeClick } from "../../app";
import "../../styles/variables.css";

const Loader = () => {
  const [isSlidingUp, setIsSlidingUp] = useState(false); // To manage the slide up state
  const [numbers, setNumbers] = useState([25, 89, 100]);
  const [numberIndex, setNumberIndex] = useState(0);
  const numberRef = useRef();
  const loaderContainerRef = useRef();

  const { hasNavClicked } = useNavClick();
  const { hasHomepageClicked } = useHomeClick();

  // Function to generate two random numbers and add 100
  const generateRandomNumbers = () => {
    let first = Math.floor(Math.random() * (98 - 1)) + 1;
    let second = Math.floor(Math.random() * (98 - first)) + first + 1;

    return [first, second, 100].sort((a, b) => a - b);
  };

  useEffect(() => {
    //need to perform the top to scroll when reload -slide main section after the loader
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    // Reset the loader display when the component mounts
    loaderContainerRef.current.style.display = "flex";

    loaderContainerRef.current.classList.remove("slide-up");
    document.querySelector(".container").classList.remove("slide-in");
    // Set new random numbers when the component mounts
    setNumbers(generateRandomNumbers());

    const handleAnimationEnd = () => {
      if (numberIndex < 2) {
        setNumberIndex((prevIndex) => prevIndex + 1); // Move to the next number
      } else {
        setIsSlidingUp(true);
      }
    };
    numberRef.current.addEventListener("animationend", handleAnimationEnd);

    // Clean up event listener
    return () => {
      if (numberRef.current) {
        numberRef.current.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, [numberIndex, hasNavClicked]);

  const location = useLocation();

  useEffect(() => {
    const showPageContainer = document.querySelector(".container");
    const navBar = document.querySelector(".nav-bar-wrapper");
    const heading = document.querySelector(".heading-section");
    const pro = document.querySelector(".heading-word-and");
    const text = document.querySelector(".heading-text");
    const arrow = document.querySelector(".arrow-big");
    const slogan = document.querySelector(".slogan");
    const image = document.querySelector(".image-container-wrapper");
    const marquee = document.querySelector(".footer-wrapper");
    const loaderContainerEl = loaderContainerRef.current;

    if (hasHomepageClicked) {
      loaderContainerEl.style.display = "none";

      showPageContainer.classList.add("slide-in");

      setTimeout(() => {
        navBar.classList.add("visible"); // Slide in the main content

        navBar.addEventListener("transitionend", () => {
          // Only after the NavBar has finished transitioning, show the Heading
          heading.classList.add("visible");

          pro.classList.add("visible");
          text.classList.add("visible");
          arrow.classList.add("visible");
          slogan.classList.add("visible");
          image.classList.add("visible");
          image.style.transitionDelay = ".3s";
          marquee.style.opacity = "1";
        });
      }, 700);
    } else if (isSlidingUp) {
      loaderContainerEl.classList.add("slide-up");

      let timerId;

      const transitionEndHandler = () => {
        // Instead of waiting for the transition to end, start a timer to slide in the container earlier
        const loaderTransitionDuration = getComputedStyle(loaderContainerRef.current).transitionDuration;
        // Convert seconds to milliseconds and decrease it slightly to slide in the container before the loader finishes
        const earlyStartMs = parseFloat(loaderTransitionDuration) * 1000 - 200;

        // Schedule sliding in the main content before the loader finishes
        timerId = setTimeout(() => {
          showPageContainer.style.overflow = "hidden";

          loaderContainerEl.style.display = "none"; // Hide the loader
          showPageContainer.classList.add("slide-in"); // Slide in the main content

          navBar.classList.add("visible"); // Slide in the main content

          navBar.addEventListener("transitionend", () => {
            // Only after the NavBar has finished transitioning, show the Heading
            heading.classList.add("visible");
            showPageContainer.style.overflow = "";
            pro.classList.add("visible");
            text.classList.add("visible");
            arrow.classList.add("visible");
            slogan.classList.add("visible");
            image.classList.add("visible");
            image.style.transitionDelay = ".3s";
            marquee.style.opacity = "1";
          });
        }, earlyStartMs);
      };

      // Listen for the start of the transition, not the end
      loaderContainerEl.addEventListener("transitionstart", transitionEndHandler);

      // Clean up both event listener and timeout
      return () => {
        clearTimeout(timerId);
        if (loaderContainerEl) {
          loaderContainerEl.removeEventListener("transitionstart", transitionEndHandler);
        }
        showPageContainer.style.overflow = "";
      };
    }
  }, [isSlidingUp, location.pathname, hasHomepageClicked]);

  const getClassName = () => {
    switch (numbers[numberIndex]) {
      case numbers[1]:
        return "from-middle-position";
      case numbers[2]:
        return "from-end-position";
      default:
        return "from-start-position";
    }
  };

  return (
    <div ref={loaderContainerRef} className="loader-container">
      <div>
        <h2>FromScratch</h2>
        <p>© 2024 ALL RIGHTS RESERVED.</p>
      </div>
      <span ref={numberRef} className={`animated-number ${getClassName()}`}>
        {numbers[numberIndex]}
      </span>
    </div>
  );
};

export default Loader;
