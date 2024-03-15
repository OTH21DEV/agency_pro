import React, { useEffect } from "react";
// import Gear from "../../components/gear";
// import gear from "../../assets/gear_black.png";
import Heading from "../../components/Heading";
import Footer from "../../components/footer";
import Slogan from "../slogan";
import NavBar from "../nav-bar";
import ServiceCards from "../service-cards";
import ProjectCards from "../project-cards";
import ContactFooter from "../contact-footer";
import Loader from "../loader";
import DraggableImg from "../draggable-img";
import ArrowBig from "../arrow-big";
import BottomLayout from "../bottom-layout";
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

  return (
    <>
      <Loader />

      <div className={"container"}>
       <div style={{position:"relative",height:"100vh"}}>
        <NavBar />

        {/* <LangueBar /> */}

        <div className="page">
          <Heading text="stunning online experiences for Enterprises, Startups  & E-commerce" />
          <DraggableImg />

          {/* <BottomLayout>
            <ArrowBig />
            <Slogan />
          </BottomLayout> */}
        </div>
        <BottomLayout>
            <ArrowBig />
            <Slogan />
          </BottomLayout>
        <Footer />
        </div>

        <ServiceCards />

        <ProjectCards />

        <ContactFooter />
      </div>
      {/* <Gear icon={gear} /> */}
      {/* {document.querySelector(".container.slide-in") && <Gear icon={gear} />} */}
    </>
  );
};
export default transition(HomePage);
