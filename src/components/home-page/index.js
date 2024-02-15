import React, { useState, useRef } from "react";
import SideNav from "../../components/menu-button";
import PageLayout from "../../components/page-layout";
import Header from "../../components/header";
import arrow from "../../assets/arrow.png";
import Gear from "../../components/gear";
import gear from "../../assets/gear_black.png";
// import arrow_big from "../../assets/arrow_big.png";
import Heading from "../../components/Heading";
import Footer from "../../components/footer";
import MenuButton from "../../components/menu-button";
import LangueBar from "../../components/langue-bar";
// import SitePlan from "../../components/site-plan";
import Slogan from "../slogan";
import TableContent from "../table-content";
// import WorkFlowCard from "../work-flow-card";
import WorkFlow from "../work-flow";
import NavBar from "../nav-bar";
import ServiceCards from "../service-cards";
import ProjectCards from "../project-cards";
import Contact from "../contact";
import ScrollTop from "../scroll-top";
import ContactFooter from "../contact-footer";
import Loader from "../loader";
import DraggableImg from "../draggable-img";
import arrow_big from "../../assets/arrow_down_outline.png";
import "./style.css";

const HomePage = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const containerRef = useRef();


  return (
    <>
      <Loader> </Loader>
      {/* <div ref={containerRef} className={`container ${loadingComplete ? 'slide-in' : ''}`}> */}
      <div className={"container"}>
        <NavBar></NavBar>
       
        {/* <PageLayout> */}
        {/* <LangueBar /> */}

        <div className="page">
          <Heading text="designs and develops stunning online experiences for Enterprises, Startups  & E-commerce." />
          <DraggableImg/>
          <div style={{ display: "flex", alignItems: "center", position: "absolute", bottom: "0", paddingLeft: "3rem" }}>
            
            <div className="arrow-big">
              <img src={arrow_big} alt="" className="arrow-big-img"></img>
            </div>
            <div style={{ display: "flex", flexDirection: "column-reverse", alignItems: "flex-end" }}>
              <Slogan></Slogan>
            </div>
          </div>
        </div>

        {/* </PageLayout> */}
        <Footer />


        <ServiceCards></ServiceCards>
        {/* <WorkFlow></WorkFlow> */}

        <ProjectCards></ProjectCards>
        {/* <Contact></Contact>
        <ContactFooter></ContactFooter> */}
        <ScrollTop></ScrollTop>
      </div>
      {document.querySelector('.container.slide-in') && <Gear icon={gear} />}
    </>
  );
};
export default HomePage;
