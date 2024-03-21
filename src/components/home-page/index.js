import React, { useEffect, useState, useRef } from "react";
import Heading from "../../components/heading"
import Footer from "../../components/footer";
import Slogan from "../../components/slogan";
import NavBar from "../../components/nav-bar";
import ServiceCards from "../../components/service-cards";
import ProjectCards from "../../components/project-cards";
import ContactFooter from "../../components/contact-footer";
import Loader from "../../components/loader";
import DraggableImg from "../../components/draggable-img";
import ArrowBig from "../../components/arrow-big";
import BottomLayout from "../../components/bottom-layout";
import transition from "../../transition";
import { useLocation } from "react-router-dom";
import { useNavClick } from "../../app";
import { useHomeClick } from "../../app";
import "./style.css";
import "../../styles/variables.css";

const HomePage = () => {
  //need to clean effect in components,
  //usest o clean the state of nav clcik when come from pages to main page - for hide the navbar in each section
  //otherwise its displayed in scroll

  const { hasHomepageClicked, setHasHomepageClicked } = useHomeClick();
  const { setHasNavClicked } = useNavClick();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setHasNavClicked(false);
      setHasHomepageClicked(false);
      sessionStorage.clear();
    }
  }, [location.pathname]);

  const [pageHeight, setPageHeight] = useState("100vh");
  const [textHeight, setTextHeight] = useState("0");
  const [arrayHeight, setArrayHeight] = useState("0");
  const textAreaRef = useRef(null);
 

  useEffect(() => {
    let pagePadding;
    // Function to update heights
    const updateHeights = () => {
      if (textAreaRef.current) {
        const computedStyles = window.getComputedStyle(textAreaRef.current);
        const paddingTop = computedStyles.paddingTop;
        const paddingBottom = computedStyles.paddingBottom;

        const paddingTopValue = parseInt(paddingTop, 10);
        const paddingBottomValue = parseInt(paddingBottom, 10);

        pagePadding = paddingTopValue + paddingBottomValue;
      }
      // Get the height of the navbar and footer
      const navbarHeight = document.querySelector(".nav-bar-wrapper").offsetHeight;
      const footerHeight = document.querySelector(".footer-wrapper").offsetHeight;
      const testElement = document.querySelector(".page-bottom");

      // Calculate the new page and text heights
      const newPageHeight = `calc(100vh - ${navbarHeight}px)`;
      const newTextHeight = `calc(100vh - ${pagePadding}px - ${navbarHeight}px - ${footerHeight}px)`;

      ///
      let testHeight = "0";
      const testComputedStyles = window.getComputedStyle(testElement);
      const paddingTopTest = parseInt(testComputedStyles.paddingTop, 10);
      const paddingBottomTest = parseInt(testComputedStyles.paddingBottom, 10);
      const marginTopTest = parseInt(testComputedStyles.marginTop, 10);
      const marginBottomTest = parseInt(testComputedStyles.marginBottom, 10);

      // Calculate the effective height of the .test element
      testHeight = `calc(${newTextHeight} - 20vh - ${paddingTopTest + paddingBottomTest + marginTopTest + marginBottomTest}px)`;

      // Set the state with the new values
      setPageHeight(newPageHeight);
      setTextHeight(newTextHeight);
      setArrayHeight(testHeight);
    };

    // Run once and also on window resize
    window.addEventListener("resize", updateHeights);
    updateHeights(); // Initial call

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  return (
    <>
      <Loader />
      <div className={"container"}>
        <NavBar />
        <div
          style={{
            position: "relative",
            height: pageHeight,
          }}
        >
          <div className="page" style={{ height: textHeight }} ref={textAreaRef}>
            <Heading text="stunning online experiences for Enterprises, Startups and E-commerce" />
            <div className="page-bottom" style={{ height: arrayHeight }}>
              <DraggableImg />
              <BottomLayout>
                <ArrowBig />
                <Slogan />
              </BottomLayout>
            </div>
          </div>
          <Footer />
        </div>
        <ServiceCards />
        <ProjectCards />
        <ContactFooter />
      </div>
    </>
  );
};
export default transition(HomePage);
