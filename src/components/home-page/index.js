import React, { useState, useRef,useEffect } from "react";
import Gear from "../../components/gear";
import gear from "../../assets/gear_black.png";
import Heading from "../../components/Heading";
import Footer from "../../components/footer";
import Slogan from "../slogan";
import NavBar from "../nav-bar";
import ServiceCards from "../service-cards";
import ProjectCards from "../project-cards";
import ContactFooter from "../contact-footer";
import Loader from "../loader";
import DraggableImg from "../draggable-img";
import arrow_big from "../../assets/arrow_down_outline.png";
import "./style.css";
import {useLocation } from "react-router-dom";
import transition from "../../transition";
import { useNavClick } from "../../app";

const HomePage = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const containerRef = useRef();
  const [loading, setLoading] = useState(true);

const location = useLocation()

const { hasNavClicked} = useNavClick(); 

  // useEffect(() => {

  //   if (hasNavClicked && location.pathname === "/contact") {
  //     setLoading(false);
  //   }
  // }, [hasNavClicked,setLoading,location.pathname]);

  return (
    <>
      <Loader> </Loader>

      <div className={"container"}>
        <NavBar></NavBar>

        {/* <LangueBar /> */}

        <div className="page">
          <Heading text="stunning online experiences for Enterprises, Startups  & E-commerce" />
          {/* <Heading text="designs and develops stunning online experiences for Enterprises, Startups  & E-commerce." /> */}
          <DraggableImg />
          <div style={{ display: "flex", alignItems: "center", position: "absolute", bottom: "0", paddingLeft: "3rem" }}>
            <div className="arrow-big">
              <img src={arrow_big} alt="" className="arrow-big-img"></img>
            </div>
            <div style={{ display: "flex", flexDirection: "column-reverse", alignItems: "flex-end" }}>
              <Slogan></Slogan>
            </div>
          </div>
        </div>

        <Footer />

        <ServiceCards></ServiceCards>

        <ProjectCards></ProjectCards>

        <ContactFooter></ContactFooter>
        {/* <ScrollTop></ScrollTop> */}
      </div>
      {document.querySelector(".container.slide-in") && <Gear icon={gear} />}
    </>
  );
};
export default transition(HomePage)
